import express from 'express';
import { Company } from '../entities/companyEntity';
import { Product } from '../entities/productEntity';
const {AppDataSource}=require('../connection') 

const company_router = express();


//post the products 
company_router.post('/products/',async(req,resp)=>{
    const rb=req.body

    const company_repo=await AppDataSource.getRepository(Company);
    const product_repo =await AppDataSource.getRepository(Product);
    
    let company_entity:Company=await company_repo.findOne({where:{name:rb.company}}) 
    let comp_id:number;
    const prod:Product=new Product()
    prod.name=rb.name
    prod.description=rb.description
    prod.price=rb.price
    
    if(company_entity)
    {
        // console.log(company_entity.id,'this is the id')
        comp_id=company_entity.id
        prod.company=company_entity //[Important line]
    }
    else{

        //uncomment below if you want to create the company during proudct insertion
        /*
        console.log(' a new company ')
        company_entity=new Company() 
        company_entity.name=rb.company  
        const new_comp=await company_repo.save(company_entity)
        prod.company=new_comp
        comp_id=new_comp.id */

        resp.status(404).send({error:'Company not found'})
    }
    // console.log(comp_id,'The company id is this')

    // console.log(company_entity,'current insertion')
    const saved_info=await product_repo.save(prod)
   
    if(saved_info) 
    {
        resp.status(200).send(saved_info)
    }
    else
    {
        resp.status(400).send({error: "Couldn't save product"})
    }
    // resp.send('hai')
})
//find one company products
company_router.get('/products/:company',async (req, resp)=>{
    
    

    const company_repo=await AppDataSource.getRepository(Company);
    const product_repo =await AppDataSource.getRepository(Product);
    
    let company_entity:Company=await company_repo.findOne({where:{name:req.params.company}})
    if(!company_entity)
    {
        resp.status(404).send({error: 'Company not found'})
    }
    const results=await product_repo.find({where:{company:company_entity}})
    resp.status(200).send(results)
})
//find all products
company_router.get('/products/',async (req, resp)=>{
    
    

    const company_repo=await AppDataSource.getRepository(Company);
    const product_repo =await AppDataSource.getRepository(Product);
    
   
    const results=await product_repo.find()
    resp.status(200).send(results)
})
//delete a particular product with help of its name
company_router.delete('/products/:name',async (req, resp)=>{
    
    
    const product_repo =await AppDataSource.getRepository(Product);
    await product_repo.delete({name:req.params.name})
    resp.send('deletion done')
})
//update a product price with help of product name
company_router.put('/products/:name',async(req, resp)=>{
    console.log(req.params.name,'product name which is targeted')
    const product_repo =await AppDataSource.getRepository(Product);
    const product=await product_repo.findOne({where:{name:req.params.name}});
    console.log(product,'product to be updated');
    product.price = req.body.price; 
    product_repo.save(product); 
    resp.send('updated price')
})
//delete company name which also deletes all its products
company_router.delete('/:name',async(req, res) => {
    const company_repo = await AppDataSource.getRepository(Company)
    const product_repo = await AppDataSource.getRepository(Product)

    const company_entity=await company_repo.findOne({where:{name:req.params.name}});
    await product_repo.delete({company:company_entity}) //without this you can also do onDeletion property in entity then you jsut need to delete company
    await company_repo.delete({name:req.params.name})
    res.send('deletion done')
})
module.exports=company_router 
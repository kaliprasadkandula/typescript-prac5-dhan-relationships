import express, { response } from 'express';
const social_router = express();
import {Hashtag} from '../entities/hashtagEntity'
import {Tweet} from '../entities/tweetEntity'
import {AppDataSource} from '../connection'

//post or create a tweet
social_router.post('/',async (req, res)=>{
  const rb=req.body
  
  let tweet_arr:Tweet[] = [];
  let hashtag_arr:Hashtag[] = [];
  const hashtag_repo=await AppDataSource.getRepository(Hashtag)
  let tweet_repo=await AppDataSource.getRepository(Tweet)
  let tweet_entity = await tweet_repo.findOne({where:{text:rb.text},relations:['hashtags']}) //[Importatnt ] mention the ralation attribute here otherwise it won't work 
  
  let hashtag_entity = await hashtag_repo.findOne({where:{tag:rb.tag}})

  if(!hashtag_entity)
  {
    hashtag_entity = new Hashtag()
    hashtag_entity.tag= rb.tag
    hashtag_entity.tweets=[]
  }
  else{
    console.log('hashtag already exists',hashtag_entity)
  }
  if(!tweet_entity)
  {
    tweet_entity = new Tweet()
    tweet_entity.text= rb.text
    tweet_entity.hashtags=[]
  }
  else{
    console.log('tweet already exists',tweet_entity)
  }

    console.log(tweet_entity.hashtags,'current tweet entity............................')
    tweet_entity.hashtags.push(hashtag_entity)
    await tweet_repo.save(tweet_entity)
 

  res.send('saved')  
})
//get all the tweets
social_router.get('/tweets',async (req, res)=>{
  const rb=req.body
  const tweet_repo=await AppDataSource.getRepository(Tweet)
  const tweets=await tweet_repo.find({relations:['hashtags']}) //fetching hastags linked with respect to the tweets
  res.send(tweets)
})
//get all hashtags
social_router.get('/hashtags',async (req, res)=>{
  const rb=req.body
  const hashtags_repo=await AppDataSource.getRepository(Hashtag)
  const hashtags=await hashtags_repo.find({relations:['tweets']})//fetching tweets linked with respect to the hashtags
  res.send(hashtags)
})
//update a particular tag
social_router.put('/hashtags/:hashtag',async (req, res)=>{ 
   const rp=req.params
   const rb=req.body
   const hashtag_repo=await AppDataSource.getRepository(Hashtag)
   console.log(rp.hashtag,'hashtag in params')
   const hashtag_data=await hashtag_repo.findOne({where:{tag:rp.hashtag}}) //fetching
  
   if(!hashtag_data)
   {
    return res.status(404).send('not found')
   }
   else{
    hashtag_data.tag=rb.tag
    await hashtag_repo.save(hashtag_data) 
   }
   
   return res.send('hashtags updated')
})
//update a particular tweet
social_router.put('/tweets/:tweet',async (req, res)=>{ 
  const rp=req.params
  const rb=req.body
  const tweet_repo=await AppDataSource.getRepository(Tweet)
  // console.log(rp.tweet,'tweet in params')
  const tweet_data=await tweet_repo.findOne({where:{text:rp.tweet}}) //fetching
 
  if(!tweet_data)
  {
   return res.status(404).send('not found')
  }
  else{
    tweet_data.text=rb.tweet
   await tweet_repo.save(tweet_data) 
  }
  
  return res.send('tweet updated')
})
//delete tweets with a hashtag 
social_router.delete('/hashtags/:hashtag',async (req, res) => {
    const rp=req.params
    const hashtags_repo=await AppDataSource.getRepository(Hashtag)
    const tweets_repo=await AppDataSource.getRepository(Tweet)
    
    await hashtags_repo.delete({tag:rp.hashtag})
    res.send('tweets with given hashtag deleted')
})






module.exports =social_router
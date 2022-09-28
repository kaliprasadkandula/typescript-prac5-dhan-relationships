"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hashtag = void 0;
const typeorm_1 = require("typeorm");
const tweetEntity_1 = require("./tweetEntity");
let Hashtag = class Hashtag extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Hashtag.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Hashtag.prototype, "tag", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => tweetEntity_1.Tweet, (tweet) => tweet.hashtags, { onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], Hashtag.prototype, "tweets", void 0);
Hashtag = __decorate([
    (0, typeorm_1.Entity)()
], Hashtag);
exports.Hashtag = Hashtag;

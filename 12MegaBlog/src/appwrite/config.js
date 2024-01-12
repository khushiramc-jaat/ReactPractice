import conf from "../conf/conf";
import {Client , Account ,ID , Databases,Storage,Query} from "appwrite";


export class Service{
    Client = new Client();
    databases;
    bucket;
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf. appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }
    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                 title,
                 content,
                 featuredImage,
                 status,
                 userId   
                }
                )
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error" , error);
        }
    }
    async updatePost({title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            
        }
    }
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: deleted :: error", error);
            return false
        }
    }
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            
        } catch (error) {
            console.log("Appwrite service :: deleted :: error", error);
            return false
        }
    }
    async getPosts(queries = [query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,

            )
        } catch (error) {
            console.log("Appwrite service :: deleted :: error", error);
            return false
        }
    }

    //file uploadFile(file){}
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique,
                file
            )
        } catch (error) {
            console.log("Appwrite service :: deleted :: error", error);
            return false
        }
    }
    async deleteFile(fileId){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique,
                file
            )
            return true
            
        } catch (error) {
            console.log("Appwrite service :: deleted :: error", error);
            return false
        }
    }
    async getFilePreviewFile(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}

const Service =new Service()
export default Service
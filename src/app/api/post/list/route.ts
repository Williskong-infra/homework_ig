import { NextResponse } from "next/server";
import { Post } from "@/db/schema";
import mongoose from "mongoose";

export async function GET(request: Request) {

    mongoose.connect('mongodb+srv://willis:d1PyytQQPqE8xLHA@mongodb-willis.nnrdk.mongodb.net/ig');

    const posts = await Post.find();


    return NextResponse.json({ posts: posts });
} 
'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const topics =[
  {
    text : "Python",
    img : "/python.png",
    desc : "Lets discuss everything related to Pythone",
    slug : "python-discussion-new"
  },
  {
    text : "Java",
    img : "/java.png",
    desc : "Lets discuss everything related to Java",
    slug : "Java-discussion-new"
  },
  {
    text : "C++",
    img : "/c++.png",
    desc : "Lets discuss everything related to c++",
    slug : "cplus-discussion-new"
  },
  {
    text : "Data Strucuter & algorithms",
    img : "/dsa.png",
    desc : "Lets discuss everything related to dsa",
    slug : "dsa-discussion-new"
  },
  {
    text : "Oops",
    img : "/oops.png",
    desc : "Lets discuss everything related to oops",
    slug : "oops-discussion-new"
  },
  {
    text : "AI",
    img : "/Ai.png",
    desc : "Lets discuss everything related to AI",
    slug : "ai-discussion-new"
  }
]
const Forums = () => {
  return (
    <div className='container mx-auto my-15'>
      <h1 className='text-4xl text-center font-bold'>Discussion Forums</h1>
      <div className='flex flex-wrap justify-center'>
        {topics.map((topic)=>{
          return <div key={topic.img} className='shadow-lg bg-slate-500 w-1/4 m-4 flex justify-center flex-col items-center py-10'>
            <Image alt='image' src={topic.img} width={40} height={40} className='w-16 h-16 rounded-full'/>
            <h2 className='text-2xl my-2'>{topic.text}</h2>
            <p>{topic.desc}</p>
            <Link href={`/forum/${topic.slug}`}>
            <Button className='my-7'>Discuss Now</Button>
            </Link>
            </div>
        })}
      </div>
    </div>
  )
}

export default Forums;

import React from 'react'
import Image from 'next/image'
import contact from '@/globalData/contact.json'
import Link from 'next/link'

export default function ContactBlock() {
  return (
    <div className='w-full bg-white font-roboto'>
      <div className='flex flex-col w-3/4 mx-auto'>
        <div className=' text-6xl text-darkBlack font-roboto py-20'> KONTAKT </div>
        <div className='grid grid-cols-3 items-center pb-20 border-b-2 border-darlGrey'>
            {contact.contactPerson.map((person) =>(
                <div key={person.id} className='flex flex-row '>
                    <Image src={`${process.env.NEXT_PUBLIC_MEDIA_STORAGE_BUCKET_URL}/${person.picture.filename}`} alt={person.picture.alt || ""} width={person.picture.width} height={person.picture.height} />
                    <div className='flex flex-col p-5'>
                        <div className=' uppercase font-semibold text-darlGrey'>{person.role}</div>
                        <div className='text-3xl text-darkBlack pb-3'>{person.fullname}</div>
                        <div className='text-darkBlack'>{person.phone}</div>
                        <div className='text-darkBlack'>{person.email}</div>
                    </div>
                </div>
            ))}
            <div className='flex flex-col p-5'>
                <div className=' uppercase font-semibold text-darlGrey'>Adres korespondencyjny</div>
                <div className='text-darkBlack'>{contact.addressLineOne}</div>
                <div className='text-darkBlack'>{contact.addressLineTwo}</div>
            </div>
        </div>
        <div className='w-full flex flex-col py-20'>
            <Image className='flex flex-row mx-auto py-5' src={`${process.env.NEXT_PUBLIC_MEDIA_STORAGE_BUCKET_URL}/${contact.logo.filename}`} alt={contact.logo.alt} width={contact.logo.width} height={contact.logo.height} />
            {contact.metaLinks.map((link) =>(
                <Link key={link.id} className='flex flex-row justify-center text-darkBlack py-2' href={link.link}>{link.label}</Link>
            ))}
        </div>
      </div>
    </div>
  )
}

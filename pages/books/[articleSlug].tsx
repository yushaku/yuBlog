import React from 'react'
// import Image from 'next/image'
import { AiOutlineDown } from 'react-icons/ai'
import { motion } from 'framer-motion'

const BlogDetail = () => {
  return (
    <div className="">
      <div
        className="relative h-[100vh] w-[100vw] 
        bg-[url('../public/bg.jpg')] bg-cover bg-center"
      >
        <div
          className="absolute 
          top-[40%] left-[5%] w-[90%] 
          md:left-[10%] md:w-[80%] 
          lg:top-[35%] lg:left-[20%] lg:w-[60%]"
        >
          <h1 className="py-4 text-[50px] font-semibold text-dark_textColor md:text-[60px] lg:text-[70px]">
            Fuck Your Feelings
          </h1>
          <p className="text-[24px] text-dark_textColor md:text-[28px]">
            There are feelings and then there are meta-feelings. Life is not about feeling amazing all the time, it is
            about understanding both the good and bad feelings.
          </p>
        </div>
        <motion.div
          className=" absolute text-4xl bottom-10 right-[50%] cursor-pointer"
          animate={{
            y: [-10, 10],
            opacity: [100, 10],
          }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          <AiOutlineDown />
        </motion.div>
      </div>
      <div className="p-4 max-w-[800px] mx-auto text-2xl mt-[70px]">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, cum! Ipsam voluptatum delectus, dolores
          esse molestias culpa recusandae necessitatibus pariatur assumenda similique quam maiores asperiores quasi
          temporibus error sequi accusamus vel debitis distinctio rerum obcaecati eum sunt magnam! Ad quasi id
          consequatur sed minus praesentium at delectus ratione distinctio accusantium. Modi adipisci dignissimos
          molestias incidunt quia facilis reiciendis maxime similique cum maiores mollitia quod, rerum, hic placeat
          repellat culpa ut laudantium quidem architecto ex ea. Aliquid, reiciendis! A eveniet sunt, corrupti adipisci
          nobis perferendis! Officia eos, architecto dicta nisi molestias commodi recusandae officiis atque libero
          veritatis, deleniti maxime exercitationem error.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore blanditiis odit veniam pariatur aliquam
          corrupti natus, debitis inventore. Incidunt nobis nostrum id accusantium sequi similique, tenetur, itaque non
          velit obcaecati, deserunt fuga molestiae. Maxime adipisci provident nam fuga distinctio minus voluptates
          ipsum, repellendus quidem officia doloribus impedit quo quos. Nam minus necessitatibus ipsam, accusantium sint
          iusto architecto numquam ex itaque. Quod beatae aperiam illum tempora a adipisci accusamus ipsa expedita nihil
          quam dolores ad necessitatibus, delectus excepturi. Excepturi fuga quia modi maiores quam fugit quis in
          dolores nihil, minus aspernatur iusto incidunt repellendus cumque magni odit, ut corrupti consectetur? Fugit
          numquam in ducimus quas quibusdam quasi, possimus sit voluptatem. Saepe nihil quaerat recusandae, quos
          architecto iure molestias ratione tempore impedit officia, autem rerum adipisci non excepturi animi.
          Necessitatibus quibusdam atque ipsam voluptatum. Cum laboriosam sed minus hic dignissimos error soluta minima,
          sapiente magni officiis maiores ea dicta quia fuga magnam voluptatibus ullam suscipit? Vero, eum? Tenetur
          pariatur dolores unde earum, impedit ipsum quae. Nisi repellendus, quo aliquam reiciendis repudiandae maxime
          accusantium vel maiores iusto cum delectus perferendis. Dicta quidem maxime pariatur nihil cum labore fugit
          error qui repellendus? Et nobis distinctio asperiores deleniti quasi voluptates suscipit non ab ducimus
          maiores.
        </p>
      </div>
    </div>
  )
}

export default BlogDetail

import React from 'react'
import Avatar from '../../components/Avatar'
import Brand from '../../components/Brand'
import CareerSection from '../../components/CareerSection'

const About: React.FC = () => (
  <div className="mt-10 text-gray-300">
    <div className="grid grid-cols-2 gap-20">
      <div className="mt-20 self-start justify-self-end">
        <Avatar src="/assets/image/bruno.jpeg" alt="Bruno Genaro Picture" />
      </div>
      <div className="w-2/3">
        <div className="mb-6">
          <Brand width={180} height={74} />
        </div>
        <p className="text-xl leading-8 tracking-wider text-gray-300 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempus
          metus id risus venenatis tincidunt ut in diam. Duis lacinia, neque ac
          porttitor aliquam, nisl tellus lacinia nisi, ac finibus sapien est nec
          odio Aliquam inter. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Proin tempus metus id risus venenatis tincidunt ut in diam. Duis
          lacinia, neque ac porttitor aliquam, nisl tellus lacinia nisi, ac
          finibus sapien est nec odio Aliquam inter. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Proin tempus metus id risus venenatis
          tincidunt ut in diam. Duis lacinia, neque ac porttitor aliquam, nisl
          tellus lacinia nisi, ac finibus sapien est nec odio Aliquam inter.
        </p>
      </div>
    </div>
    <CareerSection />
  </div>
)

export default About

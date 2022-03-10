import React, { useState } from 'react'

interface iCareer {
  title: string
  description: string
  company: {
    name: string
    url: string
  }
  date: string
}

const CareerSection: React.FC = () => {
  const Career: iCareer[] = [
    {
      title: 'Desenvolvedor Web',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis dapibus magna. Etiam in ipsum tempor, maximus ante vel, feugiat urna. Aenean faucibus at purus et sagittis. Donec non aliquam quam. Curabitur eu ex arcu. Aliquam pellentesque dolor sit amet nisi auctor, sit amet cursus odio porttitor. Suspendisse maximus porttitor sem id dignissim. Suspendisse aliquam accumsan dui. Morbi ut purus eu arcu rhoncus porta eget a nibh. Vivamus vel tempor arcu. Donec nec euismod augue. Morbi malesuada ligula augue, vitae interdum ante fringilla vitae. Donec volutpat metus vel velit hendrerit feugiat. Morbi velit nisi, eleifend feugiat eros viverra, rhoncus pellentesque magna. Nullam non venenatis metus, vitae hendrerit purus.',
      company: { name: 'Cisco', url: 'https://www.cisco.com/' },
      date: '14 novembro 2020',
    },
    {
      title: 'Desenvolvedor Backend',
      description:
        'Ut purus lacus, suscipit nec ullamcorper id, volutpat rutrum libero. Nunc dignissim vulputate odio, ac ullamcorper urna. Proin at dolor nec dui pulvinar blandit. Donec scelerisque imperdiet magna, vitae viverra ante egestas volutpat. Etiam dictum lorem nec libero varius porttitor. In placerat quam mattis iaculis hendrerit. Curabitur a massa finibus quam molestie porttitor. Donec non faucibus purus. Curabitur sed congue arcu, et euismod lorem. Vivamus faucibus dictum metus non ultricies. Curabitur eget tortor volutpat, tincidunt odio ut, egestas augue. Quisque a neque quis mi ultrices auctor. Nulla facilisi. Nunc volutpat, mi eget tincidunt vestibulum, justo urna vestibulum massa, eget faucibus elit lacus at elit.',
      company: { name: 'Apple', url: 'https://www.apple.com/' },
      date: '04 julho 2001',
    },
    {
      title: 'Desenvolvedor Sr Backend',
      description:
        'Nulla orci lorem, blandit vitae pharetra a, finibus eu magna. Nam iaculis condimentum risus vitae vehicula. Praesent lobortis, odio vel placerat molestie, enim risus condimentum sapien, nec iaculis leo risus id arcu. Praesent ut lorem hendrerit, viverra turpis ut, finibus nisl. Curabitur dapibus erat quis velit placerat luctus. Nulla facilisi. Quisque hendrerit, massa et posuere tempor, turpis eros fermentum ligula, eu feugiat diam mi eu magna. Sed semper, sem non dictum fermentum, elit lectus ultricies elit, eget fringilla mi magna finibus massa. Aenean vel massa sapien. Nullam nec ligula eget eros accumsan faucibus et in dolor. Pellentesque a mi ex. Phasellus in ante in lectus rutrum molestie. Sed convallis, tellus eu accumsan mollis, elit velit molestie tortor, sit amet pretium elit tortor id eros. Aliquam consequat pellentesque quam, eget bibendum nisi rhoncus nec. Cras facilisis, lorem ac molestie blandit, felis tortor euismod ligula, in hendrerit justo leo nec nibh. Sed eu metus odio.',
      company: { name: 'Google', url: 'https://www.google.com/' },
      date: '13 janeiro 2012',
    },
    {
      title: 'Desenvolvedor Sr Fullstack',
      description:
        'Nam feugiat, augue nec congue aliquam, neque ex aliquam turpis, quis porttitor dui turpis interdum metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur laoreet placerat sapien a gravida. Sed fringilla tellus eget massa ultricies varius. Ut posuere, purus eu hendrerit dapibus, leo risus congue diam, eu tristique metus ex quis ex. Curabitur dui quam, blandit nec mi in, accumsan congue odio. Vivamus placerat nisl eu felis pharetra, at tincidunt dui molestie. Maecenas fringilla turpis neque, maximus vestibulum elit maximus vel. Curabitur convallis nibh at arcu molestie pulvinar. Duis tincidunt fringilla libero, sed vehicula neque tempor non. Cras posuere felis elementum, laoreet ligula a, maximus nisl. Suspendisse potenti. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vitae mattis dui. Vestibulum quis diam commodo, pulvinar neque id, tincidunt ligula.',
      company: { name: 'Facebook', url: 'https://www.facebook.com/' },
      date: '14 maio 2015',
    },
    {
      title: 'Desenvolvedor Sr Fullstack',
      description:
        'Ut congue iaculis est, ornare pretium nibh commodo vel. Maecenas blandit mattis mauris in elementum. Proin sapien sapien, condimentum a tellus ut, convallis interdum libero. Praesent lobortis nibh a tortor pellentesque sodales. Curabitur sit amet tortor pellentesque, maximus lectus eget, eleifend arcu. Mauris vitae congue ipsum. Morbi scelerisque vitae metus in tempor. Nulla pellentesque hendrerit leo, sed cursus mauris pharetra nec. Proin pellentesque egestas elementum. Aliquam gravida lectus vel eleifend elementum. Suspendisse dictum felis enim. Cras semper pretium sodales. Maecenas lacinia, libero at fermentum eleifend, lacus ante commodo mauris, nec sollicitudin lacus nunc at magna. Nam pretium condimentum hendrerit. Donec consequat justo sit amet gravida sodales. Ut tincidunt mollis lorem, vitae imperdiet augue euismod ac.',
      company: { name: 'Amazon', url: 'https://www.amazon.com/' },
      date: '08 abril 2010',
    },
  ]

  const [activeItem, setActiveItem] = useState(Career[0])

  const isActive = (item: iCareer) =>
    activeItem.company.name === item.company.name

  return (
    <section className="mt-10 grid grid-cols-2 gap-20 text-xl leading-8 tracking-wider text-gray-300">
      <ul className="col-start-1 col-end-1 mt-16 justify-self-end text-center">
        {Career.map(item => (
          <li
            key={item.company.name}
            className={`rounded-l-2xl border-r-2 border-gray-300 px-5 py-1  transition delay-100 ease-in-out hover:border-blue-400 hover:bg-gray-700 hover:text-blue-400 ${
              isActive(item) && 'border-blue-400 bg-gray-700 text-blue-400'
            }`}
          >
            <button
              onClick={() => {
                setActiveItem(item)
              }}
              type="button"
            >
              {item.company.name}
            </button>
          </li>
        ))}
      </ul>
      <div className="col-start-2 col-end-2">
        <header>
          <h3 className="mb-5 text-3xl font-bold">Career</h3>
          <h4>
            <span className="mr-3 font-bold">{activeItem.title}</span>
            <a
              href={activeItem.company.url}
              className="text-blue-400"
              target="_blank"
              rel="noreferrer"
            >
              @{activeItem.company.name}
            </a>
          </h4>
          <time className="text-base">{activeItem.date}</time>
        </header>
        <p className="mt-5 w-2/3">{activeItem.description}</p>
      </div>
    </section>
  )
}

export default CareerSection

export const projects: Array<{
  name: string
  repoLink: string
  description: string | string[]
  websiteLink?: string
}> = [
  {
    name: 'UnoCSS',
    repoLink: 'unocss/unocss',
    description: ['The instant on-demand atomic CSS engine.', '# As a contributor'],
    websiteLink: 'unocss.dev'
  },
  {
    name: 'Lightest',
    repoLink: 'elliot-zzh/lightest',
    description: `An extremely light, header-only but meanwhile strong, flexible and
    customizable C++ unit test library.`
  },
  {
    name: 'birthday-count-downer',
    repoLink: 'elliot-zh/birthday-count-downer',
    description: `A simple birthday-counting-down machine.`,
    websiteLink: 'birthday-count-downer.netlify.app'
  },
  {
    name: 'ZVMS 4',
    repoLink: 'zvms/zvms4-fronend',
    description: 'Zhenhai High School Volunteer Management System Version 4.'
  },
  {
    name: 'Wordland 文字岛 ',
    repoLink: 'elliot-zzh/wordland',
    description: 'A land for words. 🏝️📜 随心而写 随心而阅',
    websiteLink: 'wordland.site'
  }
]

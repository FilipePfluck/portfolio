export const data = {
  projects: [
    {
      id: 1,
      name: 'Gobarber',
      description:
        'O gobarber foi a principal aplicação desenvolvida no GoStack. Nele, eu aprendi os principais fundamentos de Node, React e React Native. Aprendi sobre typescript, typeorm, TDD, DDD, tsyringe, arquitetura de software, styled components, validação de formulários, dentre muitas outras coisas.',
      github_url: 'https://github.com/FilipePfluck/goBarber',
      images: ['/projects/gobarber/gobarber.png'],
    },
    {
      id: 2,
      name: 'Ignews',
      description:
        'Essa foi uma das principais aplicações desenvolvidas no Ignite. Nela, eu aprendi muito sobre Next, CDNs, Stripe e NextAuth.',
      github_url: 'https://github.com/FilipePfluck/ignews2',
      images: ['/projects/ignews/ignews.png', '/projects/ignews/ignews.gif'],
    },
    {
      id: 3,
      name: 'Github Blog',
      description:
        'Essa aplicação foi feita para o terceiro desafio da trilha de React do Ignite. É uma aplicação que lista issues desse repositório como se fossem posts de um blog.',
      github_url: 'https://github.com/FilipePfluck/github-blog',
      images: [
        '/projects/github-blog/github-blog-1.png',
        '/projects/github-blog/github-blog-2.png',
      ],
    },
    {
      id: 4,
      name: 'Nlw Heat',
      description:
        'Essa aplicação foi feita em uma edição da NLW. Ela permite o usuário conectar com o Github e deixar um comentário. O maior conhecimento que eu adquiri com esse projeto foi a utilização de Socket na api, permitindo uma conexão em tempo real ininterrupta entre o backend e o frontend, o que permite que os comentários apareçam imediatamente. Como toque final, eu adicionei animações no surgimento e desaparecimento das mensagens utilizando Framer Motion,',
      github_url: 'https://github.com/FilipePfluck/nlwheat',
      images: [
        '/projects/nlw-heat/nlw-heat.png',
        '/projects/nlw-heat/nlw-heat.gif',
      ],
    },
    {
      id: 5,
      name: 'Nlw Esports',
      description:
        'Essa é uma aplicação destinada a gamers que procuram um duo. Ela foi desenvolvida durante a Nlw edição especial de Esports. A api foi desenvolvida com Node, Express, Prisma e o banco de dados escolhido durante as aulas foi o sqlite, pela facilidade de configuração. A versão para web foi feita com React, Tailwind e Radix. Também foi desenvolvido um aplicativo mobile utilizando React Native e Expo.',
      github_url: 'https://github.com/FilipePfluck/nlw-esports',
      images: [
        '/projects/nlwesports/nlwesports-1.png',
        '/projects/nlwesports/nlwesports-2.png',
      ],
    },
    {
      id: 6,
      name: 'Moveit',
      description:
        'O propósito da aplicação é auxiliar a prática do Pomodoro: estratégia muito comum para aumentar a produtividade. O usuário inicia um timer de 25 minutos, e foca no trabalho durante esse tempo. Ao término, é liberado um pequeno desafio, como piscar os olhos ou fazer um alongamento. Quando o usuário termina um desafio, ele ganha XP e sobe de nível.',
      github_url: 'https://github.com/FilipePfluck/MoveIt',
      images: ['/projects/moveit/moveit.png'],
    },
    {
      id: 7,
      name: 'Ignite Timer',
      description:
        'Essa aplicação foi desenvolvida no segundo módulo do Ignite. É um timer para realização de ciclos de pomodoro. Além do timer, a aplicação mantém um histórico dos ciclos realizados. É uma aplicação bem simples, mas além de revisar conceitos básicos do React, eu pude aprender sobre o Reducer.',
      github_url: 'https://github.com/FilipePfluck/ignite-timer',
      images: [
        '/projects/ignite-timer/ignite-timer-1.png',
        '/projects/ignite-timer/ignite-timer-2.png',
        '/projects/ignite-timer/ignite-timer-3.png',
      ],
    },
    {
      id: 8,
      name: 'Coffee Delivery',
      description:
        'Essa aplicação foi feita para o segundo desafio da nova trilha de React do Ignite. É uma aplicação para uma loja de café. Nesse projeto, revisei conceitos básicos de React e da biblioteca React Hook Form.',
      github_url: 'https://github.com/FilipePfluck/coffeeDelivery',
      images: [
        '/projects/coffee-delivery/coffee-delivery-1.png',
        '/projects/coffee-delivery/coffee-delivery-2.png',
        '/projects/coffee-delivery/coffee-delivery-3.png',
      ],
    },
    {
      id: 9,
      name: 'Discord Clone',
      description:
        'Esse projeto é um clone da interface do Discord, eu estou desenvolvendo ele com o objetivo de melhorar minhas habilidades de desenvolvimento de interfaces.',
      github_url: 'https://github.com/FilipePfluck/discord-ui-clone',
      images: ['/projects/discord/discord-1.png'],
    },
    {
      id: 10,
      name: 'Framer Motion Clone',
      description:
        'Framer Motion é uma biblioteca para criação de animações de forma declarativa, e eu decidi testar meus conhecimentos com essa ferramenta criando um clone da landing page do próprio framer motion.',
      github_url: 'https://github.com/FilipePfluck/FramerMotion',
      images: [
        '/projects/framer-motion/framer-1.gif',
        '/projects/framer-motion/framer-2.gif',
        '/projects/framer-motion/framer-3.gif',
      ],
    },
    /* {
      id: 2,
      name: 'Ignite Call',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia nemo veniam illum. Quisquam odio optio, dolorum unde quaerat ullam excepturi deserunt repudiandae minus, blanditiis accusantium officia esse laborum exercitationem!',
      images: ['/projects/ignite-call/Landing.png'],
    }, */

    {
      id: 11,
      name: 'Ignite Lab 2',
      description:
        'Essa aplicação foi desenvolvida durante o segundo Ignite Lab, um evento proporcionado pela Rocketseat. Nesse evento, eu aprendi mais sobre Graphql e Apollo. A aplicação é basicamente um site com a landing page do evento, e uma página com uma lista de aulas e um player de vídeo.',
      github_url: 'https://github.com/FilipePfluck/Ignite-lab-2',
      images: [
        '/projects/ignite-lab-2/ignite-lab-1.png',
        '/projects/ignite-lab-2/ignite-lab-2.png',
        '/projects/ignite-lab-2/ignite-lab-3.png',
      ],
    },
    {
      id: 12,
      name: 'Ignite Lab 4',
      description:
        'Essa aplicação é um microserviço de notification service desenvolvido durante o quarto Ignite Lab. Nesse projeto, eu aprimorei meus conhecimentos sobre Nest e Prisma, além de conhecer vários conceitos novos de design de software.',
      github_url: 'https://github.com/FilipePfluck/ignite-lab-4',
      images: ['/projects/ignite-lab-4/ignite-lab-4.png'],
    },
    {
      id: 13,
      name: 'Gungi',
      description:
        'Esse é um fangame baseado no jogo de mesmo nome em Hunter x Hunter.',
      github_url: 'https://github.com/FilipePfluck/gungi',
      images: ['/projects/gungi/gungi-1.png', '/projects/gungi/gungi-2.png'],
    },
    {
      id: 14,
      name: 'Worldtrip',
      description:
        'Esse projeto foi um dos desafios do Ignite. Com ele, eu pude aperfeiçoar meus conhecimentos sobre ChackraUI.',
      github_url: 'https://github.com/FilipePfluck/worldTrip',
      images: [
        '/projects/worldtrip/worldtrip.png',
        '/projects/worldtrip/worldtrip.gif',
      ],
    },

    {
      id: 15,
      name: 'Rocketshoes',
      description:
        'Esse projeto foi um dos desafios do Ignite. O objetivo foi criar um Hook para gerenciar o carrinho de compras.',
      github_url: 'https://github.com/FilipePfluck/RocketShoes',
      images: [
        '/projects/rocketshoes/rocketshoes.png',
        '/projects/rocketshoes/rocketshoes.gif',
      ],
    },
    {
      id: 16,
      name: 'Dashgo',
      description:
        'O dashgo foi um projeto desenvolvido no Ignite, onde pude utilizar diversos componentes do ChakraUI.',
      github_url: 'https://github.com/FilipePfluck/Dashgo',
      images: ['/projects/dashgo/dashgo.png', '/projects/dashgo/dashgo.gif'],
    },
    {
      id: 17,
      name: 'GoMarketplace',
      description:
        'O GoMarketplace é um e-commerce que foi desenvolvido como um dos desafios do bootcamp Gostack. Ele exibe uma lista de produtos que vêm de uma fakeapi. O usuário pode adicionar os produtos ao carrinho, e a aplicação calucla a quantidade de produtos e o preço total.',
      github_url: 'https://github.com/FilipePfluck/goMarketPlace',
      images: [
        '/projects/gomarketplace/gomarketplace-1.png',
        '/projects/gomarketplace/gomarketplace-2.png',
      ],
    },
    {
      id: 18,
      name: 'GoRestaurant',
      description:
        'Esse projeto foi um dos desafios do GoStack. É uma aplicação para gerenciar pratos de um restaurante italiano.',
      github_url: 'https://github.com/FilipePfluck/GoRestaurantWeb',
      images: [
        '/projects/gorestaurant/gorestaurant.png',
        '/projects/gorestaurant/gorestaurant.gif',
      ],
    },
  ],
}

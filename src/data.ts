export const data = {
  aboutMe: {
    'pt-BR': {
      subtitle: 'Desenvolvedor Web',
      text: `Tenho 19 anos e moro em Ivoti - RS. Sou um desenvolvedor focado em
      Typescript, Node, React e React Native. Mas estou sempre buscando
      aprender coisas novas, e não me importo em aprender outras linguagens.
      Na verdade, tenho bastante interesse em Python, Go, Rust e Elixir,
      quem sabe eu aprenda uma dessas no futuro. Além da programação de
      aplicações web, eu tenho uma leve admiração por ciência de dados e
      desenvolvimento de jogos, mas não está no meu foco de estudo por
      enquanto. Sou uma pessoa muito lógica e consigo aprender muito rápido.`,
      discordText: 'Quer conversar comigo? Me chama no Discord',
    },
    en: {
      subtitle: 'Web Developer',
      text: `I'm 19 yo and I live in Ivoti-RS, in Brazil. 
      I'm a developer focused on Typescript, Node, React and React Native. 
      I'm always looking forward to learn new things, so I don't mind learning other languages. 
      Actually, I'm very interested in Python, Go, Rust and Elixir, and perhaps I'll learn them in the future.
      Besides web development, I'm a little curious about data science and game development, 
      but I'm not focused in studying those for now.
      I'm a very logical person and I learn pretty quickly.`,
      discordText: 'Want to talk to me? Send me a message on Discord',
    },
  },
  projects: {
    'pt-BR': [
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
        name: 'Ignite Call',
        description:
          'O Ignite Call é uma aplicação onde outras pessoas podem escolher um dia e horário para marcar um agendamento na sua agenda do Google. Esse projeto foi feito com Next, NextAuth, Prisma, dentre outras tecnologias.',
        github_url: 'https://github.com/FilipePfluck/ignite-call',
        images: [
          '/projects/ignite-call/landing.png',
          '/projects/ignite-call/calendar.png',
        ],
      },
      {
        id: 3,
        name: 'Ignews',
        description:
          'Essa foi uma das principais aplicações desenvolvidas no Ignite. Nela, eu aprendi muito sobre Next, CDNs, Stripe e NextAuth.',
        github_url: 'https://github.com/FilipePfluck/ignews2',
        images: ['/projects/ignews/ignews.png', '/projects/ignews/ignews.gif'],
      },
      {
        id: 4,
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
        id: 5,
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
        id: 6,
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
        id: 7,
        name: 'Moveit',
        description:
          'O propósito da aplicação é auxiliar a prática do Pomodoro: estratégia muito comum para aumentar a produtividade. O usuário inicia um timer de 25 minutos, e foca no trabalho durante esse tempo. Ao término, é liberado um pequeno desafio, como piscar os olhos ou fazer um alongamento. Quando o usuário termina um desafio, ele ganha XP e sobe de nível.',
        github_url: 'https://github.com/FilipePfluck/MoveIt',
        images: ['/projects/moveit/moveit.png'],
      },
      {
        id: 8,
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
        id: 9,
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
        id: 10,
        name: 'Discord Clone',
        description:
          'Esse projeto é um clone da interface do Discord, eu estou desenvolvendo ele com o objetivo de melhorar minhas habilidades de desenvolvimento de interfaces.',
        github_url: 'https://github.com/FilipePfluck/discord-ui-clone',
        images: ['/projects/discord/discord-1.png'],
      },
      {
        id: 11,
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
        id: 12,
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
        id: 13,
        name: 'Ignite Lab 4',
        description:
          'Essa aplicação é um microserviço de notification center desenvolvido durante o quarto Ignite Lab. Nesse projeto, eu aprimorei meus conhecimentos sobre Nest e Prisma, além de conhecer vários conceitos novos de design de software.',
        github_url: 'https://github.com/FilipePfluck/ignite-lab-4',
        images: ['/projects/ignite-lab-4/ignite-lab-4.png'],
      },
      {
        id: 14,
        name: 'Gungi',
        description:
          'Esse é um fangame baseado no jogo de mesmo nome em Hunter x Hunter.',
        github_url: 'https://github.com/FilipePfluck/gungi',
        images: ['/projects/gungi/gungi-1.png', '/projects/gungi/gungi-2.png'],
      },
      {
        id: 15,
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
        id: 16,
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
        id: 17,
        name: 'Dashgo',
        description:
          'O dashgo foi um projeto desenvolvido no Ignite, onde pude utilizar diversos componentes do ChakraUI.',
        github_url: 'https://github.com/FilipePfluck/Dashgo',
        images: ['/projects/dashgo/dashgo.png', '/projects/dashgo/dashgo.gif'],
      },
      {
        id: 18,
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
        id: 19,
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
    en: [
      {
        id: 1,
        name: 'Gobarber',
        description:
          'Gobarber was the main application develop in Gostack. In this project, I learned the basics of Node, React and React Native. I learned about Typescript, Typeorm, TDD, DDD, Tsyringe, software design, styled components, form validation, and a lot of other things.',
        github_url: 'https://github.com/FilipePfluck/goBarber',
        images: ['/projects/gobarber/gobarber.png'],
      },
      {
        id: 2,
        name: 'Ignite Call',
        description:
          'Ignite Call is an application where other people can schedule an appointment in your Google Calendar. This project was made with Next, NextAuth, Prisma and other technologies.',
        github_url: 'https://github.com/FilipePfluck/ignite-call',
        images: [
          '/projects/ignite-call/landing.png',
          '/projects/ignite-call/calendar.png',
        ],
      },
      {
        id: 3,
        name: 'Ignews',
        description:
          'This was one of the main projects developed during Ignite. I learned a lot about Next, CDNs, Stripe and NextAuth.',
        github_url: 'https://github.com/FilipePfluck/ignews2',
        images: ['/projects/ignews/ignews.png', '/projects/ignews/ignews.gif'],
      },
      {
        id: 4,
        name: 'Github Blog',
        description:
          "This application was Ignite's third challenge. It lists issues from a repository as if they were blog posts.",
        github_url: 'https://github.com/FilipePfluck/github-blog',
        images: [
          '/projects/github-blog/github-blog-1.png',
          '/projects/github-blog/github-blog-2.png',
        ],
      },
      {
        id: 5,
        name: 'Nlw Heat',
        description:
          'This application was developed during a Next Level Week. It allows the user to connect with Github and write a comment. The greates learning I had while developing this project was the utilization of the Socket protocol. I also added animations when the messages appear and disappear using Framer Motion.',
        github_url: 'https://github.com/FilipePfluck/nlwheat',
        images: [
          '/projects/nlw-heat/nlw-heat.png',
          '/projects/nlw-heat/nlw-heat.gif',
        ],
      },
      {
        id: 6,
        name: 'Nlw Esports',
        description:
          'This application was made for gamers to found their duos. It was developed during a Next Level Week. The API was developed with Node, Express, Prisma. The frontend was developed with React, Tailwind and Radix. I also developed a mobile app with React Native and Expo.',
        github_url: 'https://github.com/FilipePfluck/nlw-esports',
        images: [
          '/projects/nlwesports/nlwesports-1.png',
          '/projects/nlwesports/nlwesports-2.png',
        ],
      },
      {
        id: 7,
        name: 'Moveit',
        description:
          'The purpouse of this application is to help its users in practicing Pomodoro. The user starts a 25 minute timer and focus in their work meanwhile. After finishing a cycle, the user is challenged to blink their eyes or stretch. When the challenge is completed, the user receives XP and may level up.',
        github_url: 'https://github.com/FilipePfluck/MoveIt',
        images: ['/projects/moveit/moveit.png'],
      },
      {
        id: 8,
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
        id: 9,
        name: 'Coffee Delivery',
        description:
          "This application was made for the second challenge of Ignite's new React track. It's an application for a coffee shop. In this project, I reviewed basic concepts of React and the React Hook Form library.",
        github_url: 'https://github.com/FilipePfluck/coffeeDelivery',
        images: [
          '/projects/coffee-delivery/coffee-delivery-1.png',
          '/projects/coffee-delivery/coffee-delivery-2.png',
          '/projects/coffee-delivery/coffee-delivery-3.png',
        ],
      },
      {
        id: 10,
        name: 'Discord Clone',
        description:
          "This project is a clone of the Discord interface, I'm developing it to improving my interface development skills.",
        github_url: 'https://github.com/FilipePfluck/discord-ui-clone',
        images: ['/projects/discord/discord-1.png'],
      },
      {
        id: 11,
        name: 'Framer Motion Clone',
        description:
          "Framer Motion is a library for declaratively creating animations, and I decided to test my knowledge with this tool by creating a clone of Framer Motion's own landing page.",
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
        id: 12,
        name: 'Ignite Lab 2',
        description:
          'This application was developed during the second Ignite Lab, an event organized by Rocketseat. In this event, I learned more about Graphql and Apollo. The application is basically a website with the landing page of the event, and a page with a list of classes and a video player.',
        github_url: 'https://github.com/FilipePfluck/Ignite-lab-2',
        images: [
          '/projects/ignite-lab-2/ignite-lab-1.png',
          '/projects/ignite-lab-2/ignite-lab-2.png',
          '/projects/ignite-lab-2/ignite-lab-3.png',
        ],
      },
      {
        id: 13,
        name: 'Ignite Lab 4',
        description:
          'This application is a notification center microservice developed during the fourth Ignite Lab. In this project, I improved my knowledge about Nest and Prisma, as well as learning about several new software design concepts.',
        github_url: 'https://github.com/FilipePfluck/ignite-lab-4',
        images: ['/projects/ignite-lab-4/ignite-lab-4.png'],
      },
      {
        id: 14,
        name: 'Gungi',
        description:
          'This is a fangame based on the game of same name in Hunter x Hunter, written by Togashi.',
        github_url: 'https://github.com/FilipePfluck/gungi',
        images: ['/projects/gungi/gungi-1.png', '/projects/gungi/gungi-2.png'],
      },
      {
        id: 15,
        name: 'Worldtrip',
        description:
          "This project was one of Ignite's challenges. With it, I could improve my knowledge about ChackraUI.",
        github_url: 'https://github.com/FilipePfluck/worldTrip',
        images: [
          '/projects/worldtrip/worldtrip.png',
          '/projects/worldtrip/worldtrip.gif',
        ],
      },

      {
        id: 16,
        name: 'Rocketshoes',
        description:
          "This project was one of Ignite's challenges. The objective was to create a Hook to manage the shopping cart.",
        github_url: 'https://github.com/FilipePfluck/RocketShoes',
        images: [
          '/projects/rocketshoes/rocketshoes.png',
          '/projects/rocketshoes/rocketshoes.gif',
        ],
      },
      {
        id: 17,
        name: 'Dashgo',
        description:
          'Dashgo was a project developed in Ignite, where I could use several ChakraUI components.',
        github_url: 'https://github.com/FilipePfluck/Dashgo',
        images: ['/projects/dashgo/dashgo.png', '/projects/dashgo/dashgo.gif'],
      },
      {
        id: 18,
        name: 'GoMarketplace',
        description:
          'GoMarketplace is an e-commerce that was developed as one of the challenges of the Gostack bootcamp. It displays a list of products that come from a fakeapi. The user can add products to the cart, and the application calculates the quantity of products and the total price.',
        github_url: 'https://github.com/FilipePfluck/goMarketPlace',
        images: [
          '/projects/gomarketplace/gomarketplace-1.png',
          '/projects/gomarketplace/gomarketplace-2.png',
        ],
      },
      {
        id: 19,
        name: 'GoRestaurant',
        description:
          "This project was one of GoStack's challenges. It is an application to manage dishes from an Italian restaurant.",
        github_url: 'https://github.com/FilipePfluck/GoRestaurantWeb',
        images: [
          '/projects/gorestaurant/gorestaurant.png',
          '/projects/gorestaurant/gorestaurant.gif',
        ],
      },
    ],
  },
  discordButton: {
    en: {
      copy: 'Copied!',
    },
    'pt-BR': {
      copy: 'Copiado!',
    },
  },
  myHistory: {
    'pt-BR': {
      sectionTitle: 'Minha História',
      timelineItems: [
        {
          title: '2019 - 2021 · Instituto Ivoti',
          text: `Eu fiz o Ensino Médio e um curso técnico de tecnologia da informação no Instituto Ivoti. Foi no técnico que eu aprendi o báscio de programação em algumas linguagens como C, Java e PHP. Também aprendi o básico de HTML, CSS, e SQL. Além da programação, tive aulas sobre hardware, redes e ferramentas gráficas.`,
        },
        {
          title: '2020 - atualmente · Rocketseat',
          text: `Durante o curso técnico, eu senti que meus aprendizados não estavam sendo suficientes, e queria ir além. Foi quando eu descobri a rocketseat. Participei de diversos eventos organizados por ele, como as Semanas Omnistack, as NLWs, e o DoWhile. Também me matriculei no GoStack, bootcamp onde me aprofundei em Node, React e React Native. Após o término do GoStack, conclui a trilha de React do Ignite, e atualmente estou assistindo as aulas da nova trilha de React que está sendo regravada.`,
        },
        {
          title: '2020 - 2021 · Hackatons',
          text: 'Eu participei do Megahack 3, organizado pela Shawee, e do Hackstation, organizado pela Rocketseat. Nesses Hackatons, tive a oportunidade de conhecer pessoas novas, melhorei meu trabalho em equipe, e tive a experiência de pensar em uma ideia e desenvolver ela em um curto período de tempo. Eu diria que meu maior aprendizado nos Hackatons foi a importância de um escopo.',
        },
        {
          title: '2021 - 2022 · Vobi',
          text: 'Minha primeira oportunidade de emprego foi na Vobi, uma Startup que desenvolve software para gestão de escritórios de design e arquitetura. Eu comecei como estagiário e posteriormente fui efetivado. Na vobi, trabalhei com React no frontend e Node no backend. Meu principal aprendizado na vobi foi descobrir como é o ambiente de trabalho: aprendi a lidar com as pessoas do time, aprendi sobre a metodologia de trabalho ágil, aprendi a receber demandas e lidar com prazos. Também melhorei muito as minhas habilidades com o Git.',
        },
        {
          title: '2022 - atualmente · Pato Academy',
          text: 'Estou matriculado no curso de segurança da informação do Gabriel Pato. Meu objetivo com isso é meramente aprimorar meus conhecimentos de informática, e poder desenvolver aplicações cada vez mais seguras.',
        },
        {
          title: '2022 · Hacktoberfest',
          text: 'Em 2022 eu participei do Hacktoberfest, onde tive meu primeiro contato com contribuições em projetos open source. Fiz as 4 PRs necessárias, e achei uma experiência incrível.',
        },
      ],
    },

    en: {
      sectionTitle: 'My History',
      timelineItems: [
        {
          title: '2019 - 2021 · Instituto Ivoti',
          text: `I attended highschool and a technical course in Instituto Ivoti. 
          In the technical course I learned the basics of some programming languages such as C, Java and PHP. 
          I also learned the basics of HTML, CSS and SQL. 
          Besides programming, I took classes on hardware, networks and graphic softwares`,
        },
        {
          title: '2020 - currently · Rocketseat',
          text: `During the technical course, I felt like what I was learning wasn't enough and wanted to reach the next level. So I decided to study on my own. Then, I found out Rocketseat, one of greatest brazilian programming schools. I participated in several events organized by them, such as "Omnistack week", "Next Level Week", and "DoWhile". I also enrolled in GoStack, a bootcamp where I studied Node, React and React Native. After I fdinished GoStack, I concluded the React section of the Ignite Bootcamp and I'm currently wathing the new classes from Ignite that are being Re-recorder.`,
        },
        {
          title: '2020 - 2021 · Hackatons',
          text: "I participated in Megahack 3, organized by Shawee, and in Hackstation, organized by Rocketseat. In those Hackatons, I met new people, improved my team work, and experienced the process of having an idea and developing it in a short span of time. I'd say the greatest learning I had participating in hackatons is the importance of a scope.",
        },
        {
          title: '2021 - 2022 · Vobi',
          text: 'My first job was at Vobi, a Startup which develop software for design and architecture offices. I started as an intern and worked full-time afterwards. At vobi, I worked with React and Node. My greatest learning at Vobi was descovering how the working environment works: I learned how to handle coworkers, learned abou agile work, I learned to receive demands and deal with deadlines. I also improved by a lot my skills with Git.',
        },
        {
          title: '2022 - atualmente · Pato Academy',
          text: "I'm enrolled in the cybersecurity course lectured by one of the greaters Hackers from Brazil, Gabriel Pato. My objective in this course is to improve my knowledge about informatics and to develop secure applications.",
        },
        {
          title: '2022 · Hacktoberfest',
          text: 'In 2022 I participated in Hacktoberfest, where I could experience open source development. I made all the 4 requires PRs and could finish the challenge. It was overall a great experience.',
        },
      ],
    },
  },
  techs: {
    'pt-BR': {
      title: 'Tecnologias',
      react:
        'React é uma biblioteca para desenvolvimento de interfaces reativas. É a tecnologia em que tenho mais domínio, e a que mais utilizei no último ano. Sei desenvolver interfaces completas e componentizadas, fazer requisições http, gerenciar estados, criar e utilizar hooks. Também tenho conhecimento sobre o fluxo de renderização do React e sei evitar certos erros que ocasionam rerenders de mais. Também tenho domínio em Next, um framework para utilizar em cima do React. Ele permite a utilização de SSR e SSG no React, e resolve problemas como SEO. Além disso, tenho alguma experiência com diversas ferramentas do ecossistema, como Styled Components, Stitches, Radix, Mantine, Framer Motion, React Hook Form, React Query, dentre outras.',
      node: 'Node é uma plataforma de exedcução de código javascript fora do navegador. Através dele, eu consigo desenvolver APIs REST em typescript, utilizando o Express. Sei lidar com bancos de dados utilizando ORMs como TypeORM, Prisma e Sequelize. Tenho alguns conhecimentos de arquitetura de software, como DDD e alguns princípios do SOLID. Sei escrever testes automatizados. Já tive um pouco de contato com Nest, GraphQL e Kafka. Embora eu seja capaz e não me importe de atuar como fullstack, hoje eu tenho um pouco de preferência pelo frontend.',
      reactNative:
        'React Native é uma tecnologia que serve para desenvolver código para aplicativos tanto para Android como para IOS, com uma sintaxe muito semelhante a do React. Já criei aplicativos com e sem Expo, e tenho familiaridade com diversas ferramentas do ecossistema, como Styled Components, Moti, ',
    },

    en: {
      title: 'Techs',
      react:
        "React is a library for developing reactive interfaces. It's the technology I'm most proficient at, and the one I've used the most in the last year. I know how to develop complete and componentized interfaces, make http requests, manage states, create and use hooks. I'm also knowledgeable about React's rendering cycle and know how to avoid certain bad practices that cause too many renders. I also master Next, a framework to use on top of React. It allows the use of SSR and SSG in React, and solves problems like SEO. In addition, I have some experience with several libraries, such as Styled Components, Stitches, Radix, Mantine, Framer Motion, React Hook Form, React Query, among others.",
      node: "Node is a javascript runtime environment. Through it, I can develop REST APIs in typescript, using Express. I know how to deal with databases using ORMs like TypeORM, Prisma and Sequelize. I have some software design knowledge, like DDD and some SOLID principles. I can write tests. I already had a little contact with Nest, GraphQL and Kafka. While I'm capable of and don't mind being fullstack, today I have a bit of a preference for the frontend.",
      reactNative:
        "React Native is a technology made to develop a single codebase for both Android and IOS, with a syntax very similar to that of React. I've created apps with and without Expo, and I'm familiar with several tools such as Styled Components and Moti.",
    },
  },
  header: {
    en: {
      aboutMe: 'About Me',
      myHistory: 'My History',
      projects: 'Projects',
      techs: 'Techs',
    },
    'pt-BR': {
      aboutMe: 'Sobre mim',
      myHistory: 'Minha história',
      projects: 'Projetos',
      techs: 'Tecnologias',
    },
  },
  projectDescription: {
    'pt-BR': {
      description:
        'Eses são só alguns dos meus projetos. Quer ver todos? Eles estão no meu',
    },

    en: {
      description:
        'Those are just a few of my projects. Want to see all of them? They are on my',
    },
  },
}

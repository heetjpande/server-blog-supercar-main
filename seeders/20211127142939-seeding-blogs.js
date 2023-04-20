'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Blogs",
      [
        {
            title: "Lamborghini",
            content: "Ferruccio Lamborghini, an Italian manufacturing magnate, founded Automobili Ferruccio Lamborghini S.p.A. in 1963 to compete with Ferrari. The company was noted for using a rear mid-engine, rear-wheel drive layout. Lamborghini grew rapidly during its first decade, but sales plunged in the wake of the 1973 worldwide financial downturn and the oil crisis. The firm's ownership changed three times after 1973, including a bankruptcy in 1978. American Chrysler Corporation took control of Lamborghini in 1987 and sold it to Malaysian investment group Mycom Setdco and Indonesian group V'Power Corporation in 1994. In 1998, Mycom Setdco and V'Power sold Lamborghini to the Volkswagen Group where it was placed under the control of the group's Audi division.\nNew products and model lines were introduced to the brand's portfolio and brought to the market and saw an increased productivity for the brand. In the late 2000s, during the worldwide financial crisis and the subsequent economic crisis, Lamborghini's sales saw a drop of nearly 50 per cent.\nLamborghini currently produces the V12-powered Aventador and the V10-powered Huracán, along with the Urus SUV powered by a twin-turbo V8 engine. In addition, the company produces V12 engines for offshore powerboat racing. Lamborghini Trattori, founded in 1948 by Ferruccio Lamborghini, is headquartered in Pieve di Cento, Italy and continues to produce tractors.",
            imgUrl: "https://images.unsplash.com/photo-1614377284368-a6d4f911edc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
            UserId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            title: "Bugatti",
            content: "Bugatti Automobiles S.A.S. is a French high-performance luxury automobiles manufacturer and a luxury brand for hyper sports cars. The company was founded in 1998 as a subsidiary of the Volkswagen Group and is based in Molsheim, Alsace. In 1909, namesake Ettore Bugatti founded his automotive brand Bugatti here and, with interruptions due to World War II, built sports, racing, and luxury cars until 1963. Since January 1, 2018, the company has been led by Stephan Winkelmann as President. In late 2021 the company will become part of Bugatti Rimac.",
            imgUrl: "https://images.unsplash.com/photo-1566023888476-6f17e362fbb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2865&q=80",
            UserId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            title: "Rolls-Royce",
            content: "Rolls-Royce Motor Cars Limited is a British luxury automobile maker. Rolls-Royce Motor Cars Limited operates from purpose-built administrative and production facilities opened in 2003 across from the historic Goodwood Circuit in Goodwood, West Sussex, England, United Kingdom. Rolls-Royce Motor Cars Limited is the exclusive manufacturer of Rolls-Royce branded motor cars since 2003.\nAlthough the Rolls-Royce brand has been in use since 1906, the Rolls-Royce Motor Cars subsidiary of BMW AG has no direct relationship to Rolls-Royce-branded vehicles produced prior to 2003 other than being a major engine and other supplier prior to 2003. The Bentley Motors Limited subsidiary of Volkswagen AG is the direct successor to Rolls-Royce Motors and various other predecessor entities that produced Rolls-Royce and Bentley branded cars between the foundation of each company and 2003, when the BMW-controlled entity started producing cars under the Rolls-Royce brand.\nThe Rolls-Royce Phantom four-door sedan was the first product offered for sale in 2003. Since then, the company has expanded its product line to include extended wheelbase, two-door coupé, and convertible versions of the Phantom Sedan, as well as the smaller Ghost four-door sedan, Wraith two-door coupé, Dawn Convertible, and the Cullinan SUV.",
            imgUrl: "https://images.unsplash.com/photo-1632548260498-b7246fa466ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80",
            UserId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            title: "McLaren",
            content: "McLaren again used Mercedes engines in 2021 after their deal with Renault ended. McLaren had previously collaborated with Mercedes from 1995 through 2014. Daniel Ricciardo moved from Renault to partner Lando Norris for the 2021 Formula One World Championship on a multi-year deal. Ricciardo replaced Carlos Sainz, who moved to Ferrari. In the season's first nine races, the team scored three podiums with Mercedes power, in Italy, Monaco and Austria, all courtesy of Norris.\nAt the 2021 Italian Grand Prix, Ricciardo scored his first win since the 2018 Monaco Grand Prix, and McLaren's first win since the 2012 Brazilian Grand Prix.[147] A second-place finish for Norris also meant that McLaren achieved their first one-two finish since the 2010 Canadian Grand Prix. Norris secured the team's first pole position in the hybrid era at the 2021 Russian Grand Prix.",
            imgUrl: "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
            UserId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            title: "Toyota Supra",
            content: "A car that’s been seven years in gestation and returned 21 years after its last appearance. Yet still it resonates. Supra. We first had it confirmed at the Detroit motor show back in 2014, when it was called the FT-1 Concept. Since then, much controversy. Mostly as a result of Toyota’s partnership with BMW.\nUnderneath, the Supra shares a platform, running gear, engine, gearbox and large chunks of the interior with the latest BMW Z4. Another example of Toyota partnering with other marques to make the economics work (see also GT86/Subaru BRZ, and Aygo/Peugeot 108/Citroen C1).\nBut this partnership is different, because the Supra matters. It’s not a run-of-the-mill hatchback or a newly introduced small coupe. The Supra badge has history, a history that places it front and centre in Japanese car culture alongside the Honda NSX and Nissan GT-R.\nIt’s a car about which the President of the company, Akio Toyoda, a known petrolhead, has said “Supra is like an old friend that holds a special place in my heart”, and yet rather than building a bespoke halo car from scratch, the world’s largest car company has chosen to ship in large chunks of a moderately well regarded German roadster. And build it in Austria.",
            imgUrl: "https://images.unsplash.com/photo-1548618607-fe992dd33eff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
            UserId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            title: "Koenigsegg",
            content: `The company was founded in 1994 in Sweden by Christian von Koenigsegg, with the intention of producing a "world-class" sports car. Many years of development and testing led to the CC8S, the company's first street-legal production car which was introduced in 2002.\nIn 2006, Koenigsegg began production of the CCX, which uses an engine created in-house especially for the car. The goal was to develop a car homologated for use worldwide, particularly the United States whose strict regulations did not allow the import of earlier Koenigsegg models.\nIn March 2009, the CCXR was listed by Forbes as one of "the world's most beautiful cars". In December 2010, the Agera won the BBC Top Gear Hypercar of the Year Award. Apart from developing, manufacturing and selling the Koenigsegg line of sports cars, Koenigsegg is also involved in "green technology" development programmes beginning with the CCXR ("Flower Power") flex-fuel sports car and continuing through the present with the Jesko. Koenigsegg is also active in development programs of plug-in electric cars' systems and next-generation reciprocating engine technologies. Koenigsegg has also developed a camless piston engine which found its first application in the Gemera, which was introduced in 2020. Koenigsegg develops and produces most of the main systems, subsystems and components needed for their cars in-house instead of relying on subcontractors. In January 2019, Koenigsegg sold a 20% stake in the company to Swedish electric car manufacturer (Egstrand & Lundgren), National Electric Vehicle Sweden (NEVS), for US$171 million.`,
            imgUrl: "https://images.unsplash.com/photo-1596906673164-fffb05b8333d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
            UserId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Blogs", null, {});
  }
};

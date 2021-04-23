const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  await saveOrphanage(db, {
    lat: "-27.222633",
    lng: "-49.6555874",
    name: "Lar dos meninos",
    about:
      "Preste assistência a crianças de 06 a 15 anos que se encontra em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "7777777777",
    images: [
      "https://images.unsplash.com/photo-1613381385525-22eba54c60eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE4Njg5NjYz&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",

      "https://images.unsplash.com/photo-1617758387451-79bcae2d86eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE4Njg5NzAw&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    ].toString(),
    instructions: "Venha como se sentir a vontade e traga muito amor para dar.",
    opening_hours: "Horário de visitas das 18h até 8h",
    open_on_weekends: "0",
  });

  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);

  //  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
  // console.log(orphanage)
});

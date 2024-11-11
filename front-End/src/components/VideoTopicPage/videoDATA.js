// Mock data for videos
const videoData = {
    en: {
      'Discipleship': [
        { title: 'Desire to Sin', date: "09/21/2024", url: 'https://www.youtube.com/embed/LB3ZRQm5m38?si=iTYotPojGAxWFQ9D', desc: "To even consider becoming a disciple, the first step is to confront and overcome your desire to sin. Through obedience to Christ, He will empower you to rise above and help you live out your true purpose." },
        { title: 'Virtue, Fear, and Truth', date:"10/05/2024", url: 'https://www.youtube.com/embed/KLByGYOqhc8?si=iAqHpaVX92bG1vqs', desc:"This message highlights the essential qualities of a good disciple and the traits necessary to become a potential leader in Christ. Virtue plays a crucial role in this journey!" },
        { title: 'The Doctrine', date:"10/12/2024", url: 'https://www.youtube.com/embed/-v_7EvI2BGI?si=j8SUesZ0pWlNaEUS', desc:"Explore the foundational beliefs of the Christian doctrine and discover what it means to be a true disciple of Jesus, especially on this significant day of Yom Kipur, a time for reflection and atonement." },
        { title: 'Come and Follow Me', date:"10/19/2024", url: 'https://www.youtube.com/embed/cL7AYe5Fp3w?si=DCicjBro0NxywNQr', desc:"In this powerful message, explore Jesus’ call to deny ourselves, pick up our cross, and follow Him. Discover what true discipleship means and how to live it out daily." }
      ],
      'Marriage': [
        { title: 'One stays or both stay', date: "09/21/2024", url: 'https://www.youtube.com/embed/aogAEZp9FNM?si=Z2_wCAirtGivkWXW', desc: "This message emphasizes the importance of unity and obedience in marriage and relationships, based on Luke 17:34-35. It highlights how both partners must follow God together to achieve true harmony and strength in their relationship."},
        { title: 'Eye for Eye, Tooth for Tooth - Part 1', date:"9/29/2024", url: 'https://www.youtube.com/embed/SmzsSMRp-hA?si=EFbi0ohM4nBq4bYy', desc:"This message explores the principle of \"an eye for an eye\" and emphasizes that in marriage, we should follow Jesus' new teachings. Unity is key—focus on self-reflection instead of retaliation. Discover more insights in this message!" },
        { title: 'Eye for Eye, Tooth for Tooth - Part 2', date:"10/6/2024", url: 'https://www.youtube.com/embed/qslJjGazndU?si=wugRg0VmQTTOPNtP', desc:"This message continues the principle of \"an eye for an eye\" and emphasizes that in marriage, we should follow Jesus' new teachings. This is part two of the series." },
        { title: 'Eye for Eye, Tooth for Tooth - Part 3', date:"10/13/2024", url: 'https://www.youtube.com/embed/e0C8Rv09nNE?si=By32VjQ4pO__VC9k', desc:"This message continues the principle of \"an eye for an eye\" and emphasizes that in marriage, we should follow Jesus' new teachings. This is part three of the series."},
        { title: 'Eye for Eye, Tooth for Tooth - Part 4', date:"10/20/2024", url: 'https://www.youtube.com/embed/Z7_HTLP9npE?si=mL6moET5FPWR0Zw4', desc:"This message continues the principle of \"an eye for an eye\" and emphasizes that in marriage, we should follow Jesus' new teachings. This is part four of the series."},
        { title: 'Eye for Eye, Tooth for Tooth - Part 5', date:"11/10/2024", url: 'https://www.youtube.com/embed/4xHyDIDQaN4?si=Ycw-N4GmPZx6P1vh', desc:"This message continues the principle of \"an eye for an eye\" and emphasizes that in marriage, we should follow Jesus' new teachings. This is part five of the series."}
      ]
    },
    es: {
      'Discipleship': [
        { title: 'La Concupiscencia', date: "21/09/2024", url: 'https://www.youtube.com/embed/LB3ZRQm5m38?si=iTYotPojGAxWFQ9D', desc: "Para siquiera pensar en convertirte en un discípulo, el primer paso es confrontar y vencer tu deseo de pecar. Con obediencia a Cristo, Él te empoderará para que te levantes y te ayude a vivir tu verdadero propósito."},
        { title: 'La virtud, el temor y la verdad', date:"05/10/2024", url: 'https://www.youtube.com/embed/KLByGYOqhc8?si=iAqHpaVX92bG1vqs', desc:"Este mensaje destaca las cualidades esenciales de un buen discípulo y los rasgos necesarios para convertirse en un líder potencial en Cristo. ¡La virtud juega un papel crucial en este camino!"},
        { title: 'La Doctrina', date:"12/10/2024", url: 'https://www.youtube.com/embed/-v_7EvI2BGI?si=j8SUesZ0pWlNaEUS', desc:"Explora las creencias fundamentales de la doctrina cristiana y descubre lo que significa ser un verdadero discípulo de Jesús, especialmente en este significativo día de Yom Kipur, un tiempo de reflexión y expiación."},
        { title: 'Ven y Sígueme', date:"19/10/2024", url: 'https://www.youtube.com/embed/cL7AYe5Fp3w?si=DCicjBro0NxywNQr', desc:"En este poderoso mensaje, explora el llamado de Jesús a negarnos a nosotros mismos, tomar nuestra cruz y seguirle. Descubre lo que realmente significa ser discípulo y cómo vivirlo cada día."}
    ],
      'Marriage': [
        { title: 'Se queda uno o se quedan los dos', date: "22/09/2024", url: 'https://www.youtube.com/embed/aogAEZp9FNM?si=Z2_wCAirtGivkWXW', desc: "Este mensaje enfatiza la importancia de la unidad y la obediencia en el matrimonio y las relaciones, basado en Lucas 17:34-35. Resalta cómo ambos compañeros deben seguir a Dios juntos para lograr verdadera armonía y fortaleza en su relación." },
        { title: 'Ojo por Ojo, Diente por Diente - Parte 1', date:"29/9/2024", url: 'https://www.youtube.com/embed/SmzsSMRp-hA?si=EFbi0ohM4nBq4bYy', desc:"Este mensaje explora el principio de \"ojo por ojo\" y enfatiza que en el matrimonio debemos seguir las enseñanzas de Jesús. La unidad es clave—enfócate en la autorreflexión en lugar de la retaliación. ¡Descubre más en este mensaje!" },
        { title: 'Ojo por Ojo, Diente por Diente - Parte 2', date:"6/10/2024", url: 'https://www.youtube.com/embed/qslJjGazndU?si=wugRg0VmQTTOPNtP', desc:"Este mensaje continúa el principio de \"ojo por ojo\" y enfatiza que en el matrimonio debemos seguir las enseñanzas de Jesús. Esto es parte 2 de la serie."},
        { title: 'Ojo por Ojo, Diente por Diente - Parte 3', date:"13/10/2024", url: 'https://www.youtube.com/embed/e0C8Rv09nNE?si=By32VjQ4pO__VC9k', desc:"Este mensaje continúa el principio de \"ojo por ojo\" y enfatiza que en el matrimonio debemos seguir las enseñanzas de Jesús. Esto es parte 3 de la serie."},
        { title: 'Ojo por Ojo, Diente por Diente - Parte 4', date:"20/10/2024", url: 'https://www.youtube.com/embed/Z7_HTLP9npE?si=mL6moET5FPWR0Zw4', desc:"Este mensaje continúa el principio de \"ojo por ojo\" y enfatiza que en el matrimonio debemos seguir las enseñanzas de Jesús. Esto es parte 4 de la serie."},
        { title: 'Ojo por Ojo, Diente por Diente - Parte 5', date:"10/11/2024", url: 'https://www.youtube.com/embed/4xHyDIDQaN4?si=Ycw-N4GmPZx6P1vh', desc:"Este mensaje continúa el principio de \"ojo por ojo\" y enfatiza que en el matrimonio debemos seguir las enseñanzas de Jesús. Esto es parte 5 de la serie."}
      ]
    }
  };
  
  export default videoData;
  

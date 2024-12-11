// Mock data for videos
const videoData = {
  // descriptions SHOULD BE 250 CHARACATERS OR LESS!!!!
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
        { title: 'Eye for Eye, Tooth for Tooth - Part 5', date:"11/10/2024", url: 'https://www.youtube.com/embed/4xHyDIDQaN4?si=Ycw-N4GmPZx6P1vh', desc:"This message continues the principle of \"an eye for an eye\" and emphasizes that in marriage, we should follow Jesus' new teachings. This is part five of the series."},
        { title: 'Eye for Eye, Tooth for Tooth - Part 6', date:"11/17/2024", url: 'https://www.youtube.com/embed/yFWG8nWpccI?si=CErLKGYL2g8hyUyt', desc:"This message continues the principle of \"an eye for an eye\" and emphasizes that in marriage, we should follow Jesus' new teachings. This is part six of the series."},
        { title: 'Eye for Eye, Tooth for Tooth - Part 7', date:"11/24/2024", url: 'https://www.youtube.com/embed/xVyTro6uRkA?si=93lVfCSSn16fyAzN', desc:"This message concludes the principle of \"an eye for an eye\". This is the final episode of the series."}
      ],
      'Mind': [
        { title: 'The Mind', date: '11/30/2024', url: 'https://www.youtube.com/embed/OJxkw8KeGyQ?si=7HXUNDcbCHfJ6GKq', desc: 'Join our pastor as he uncovers biblical truths about the mind, teaching Christians how to guard their thoughts and hearts. Discover how mastering the mind can lead to a deeper discipleship and a stronger walk with Christ. Watch the series and be transformed!'},
        { title: 'The Mind - Part 2', date: '12/7/2024', url: 'https://www.youtube.com/embed/pJ98PXJduxA?si=ttvnsmq70SNyJKGF', desc: 'Part 2 of our Mind series dives deeper into how your thoughts shape your life and faith. Learn to protect your mind and align your thoughts with God’s Word for a stronger walk with Christ. Don’t miss this transformative teaching!'}
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
        { title: 'Ojo por Ojo, Diente por Diente - Parte 5', date:"10/11/2024", url: 'https://www.youtube.com/embed/4xHyDIDQaN4?si=Ycw-N4GmPZx6P1vh', desc:"Este mensaje continúa el principio de \"ojo por ojo\" y enfatiza que en el matrimonio debemos seguir las enseñanzas de Jesús. Esto es parte 5 de la serie."},
        { title: 'Ojo por Ojo, Diente por Diente - Parte 6', date:"17/11/2024", url: 'https://www.youtube.com/embed/yFWG8nWpccI?si=CErLKGYL2g8hyUyt', desc:"Este mensaje continúa el principio de \"ojo por ojo\" y enfatiza que en el matrimonio debemos seguir las enseñanzas de Jesús. Esto es parte 6 de la serie."},
        { title: 'Ojo por Ojo, Diente por Diente - Parte 7', date:"24/11/2024", url: 'https://www.youtube.com/embed/xVyTro6uRkA?si=93lVfCSSn16fyAzN', desc:"Este mensaje concluye el principio de \"ojo por ojo\". Este es el episodio final de la serie."}
      ],
      'Mind': [
        { title: 'La Mente', date: '30/11/2024', url: 'https://www.youtube.com/embed/OJxkw8KeGyQ?si=7HXUNDcbCHfJ6GKq', desc: 'Acompaña a nuestro pastor mientras revela verdades bíblicas sobre la mente, enseñando a los cristianos a proteger sus pensamientos y corazones. Descubre cómo dominar la mente lleva a un discipulado más profundo. ¡Mira la serie y transforma tu vida!'},
        { title: 'La Mente - Parte 2', date: '7/12/2024', url: 'https://www.youtube.com/embed/pJ98PXJduxA?si=ttvnsmq70SNyJKGF', desc: 'La Parte 2 de nuestra serie sobre la mente explora cómo tus pensamientos moldean tu vida y fe. Aprende a proteger tu mente y alinear tus ideas con la Palabra de Dios. ¡No te pierdas esta enseñanza transformadora!'}
      ],
    }
  };
  
  export default videoData;
  

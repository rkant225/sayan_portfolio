const initilizeAutoTyping =()=>{

    var options = {
        strings: ['Developer', 'YouTuber', 'Learner', 'FreeLancer'],
        typeSpeed: 100,
        backSpeed : 60,
        loop : true
    };
    
    var aa = new window.Typed('.typing-1', options);
    var aa = new window.Typed('.typing-2', options);

    var options = {
        strings: ['Javascript', 'HTML', 'CSS', 'React JS', 'Redux', 'Axios', 'Redux-Form', 'React Router', 'Material UI', 'Node JS', 'Express JS', 'CORS', 'User Auth', 'JWT'],
        typeSpeed: 100,
        backSpeed : 60,
        loop : true
    };
    
    var aa = new window.Typed('.typing-3', options);


    // Owl carousel - this is being displayed in Peers section
    window.$('.owl-carousel').owlCarousel({
        loop:true,
        margin:5,
        nav:false,
        dots : false,
        dotsEach : false,
        autoplay : true,
        autoplayTimeout : 2000,
        autoplayHoverPause : true,
        center : true,
        // autoWidth: true,
        responsive:{
            0:{
                items:1.2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })
      
}

export default initilizeAutoTyping;
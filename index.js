const express = require('express');

const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/pages')); 

var cars = [
    {
        id: "01",
        make: "Audi",
        model: "a4",
        price: "41100.0",
        year: "2016",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec efficitur sapien. Praesent id viverra nisl, sed varius magna. Suspendisse vel enim et nisi eleifend vehicula at rutrum ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris varius sem at neque ultricies, ut ornare neque accumsan.",
        slug: "audi-a4-2016"
    },
    {
        id: "02",
        make: "Mercedes Benz",
        model: "metris",
        price: "32500.0",
        year: "2016",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec efficitur sapien. Praesent id viverra nisl, sed varius magna. Suspendisse vel enim et nisi eleifend vehicula at rutrum ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris varius sem at neque ultricies, ut ornare neque accumsan.",
        slug: "mercedes-metris-2016"
    },
    {
        id: "03",
        make: "Volkswagen",
        model: "golf-gti",
        price: "29125.0",
        year: "2016",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec efficitur sapien. Praesent id viverra nisl, sed varius magna. Suspendisse vel enim et nisi eleifend vehicula at rutrum ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris varius sem at neque ultricies, ut ornare neque accumsan.",
        slug: "volkswagen-golf_gti-2016"
    },
    {
        id: "04",
        make: "Ferrari",
        model: "458-italia",
        price: "291744.0",
        year: "2015",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec efficitur sapien. Praesent id viverra nisl, sed varius magna. Suspendisse vel enim et nisi eleifend vehicula at rutrum ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris varius sem at neque ultricies, ut ornare neque accumsan.",
        slug: "ferrari-458_italia-2015"
    },
    {
        id: "05",
        make: "Porshe",
        model: "boxster",
        price: "82100.0",
        year: "2016",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec efficitur sapien. Praesent id viverra nisl, sed varius magna. Suspendisse vel enim et nisi eleifend vehicula at rutrum ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris varius sem at neque ultricies, ut ornare neque accumsan.",
        slug: "porshe-boxster-2016"
    }
]

app.get('/', (req, res) => {
    res.render('home', {data : cars});
});

app.get('/cars/:slug', (req, res) => {
    var slug = req.params.slug;
    var car = cars.find(c => c.slug === slug);
    if (car != null || car === '') {
        res.render('car-single', {data : car});
    } else {
        res.redirect('/');
    }
});

app.get("*", (req, res) => {
    res.redirect('/');
})

app.listen(3000, () => {
    console.log('Servidor rodando perfeitamente!');
});
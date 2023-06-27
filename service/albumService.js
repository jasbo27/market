class AlbumService {
    id = 2;
    albumList = [{
        id: "0",
        title: "Dark side of the moon",
        author: "Pink Floyd",
        image: 'https://i.discogs.com/9TFRqx1yW7EkC71l42QR2UEjnSWzcXT5TGDsfWxT4xE/rs:fit/g:sm/q:90/h:600/w:597/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4NzMw/MTMtMTY2NzIwODk0/MC01NTc3LmpwZWc.jpeg',
        description: 'The Dark Side of the Moon is the eighth studio album by the English rock band Pink Floyd, released on 1 March 1973 by Harvest Records. Developed during live performances before recording began, it was conceived as a concept album that would focus on the pressures faced by the band during their arduous lifestyle, and also deal with the mental health problems of former band member Syd Barrett, who departed the group in 1968. New material was recorded in two sessions in 1972 and 1973 at EMI Studios (now Abbey Road Studios) in London.'
    },
    {
        id: "1",
        title: "The Wall",
        author: "Pink Floyd",
        image: 'https://i.discogs.com/gvMsVECicK2YRlJ7S9wlbeLS2L_o39owUyYlv6JTc3w/rs:fit/g:sm/q:90/h:600/w:588/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3Mzcx/ODU2LTE2ODY2NjQx/NzUtOTY5NC5qcGVn.jpeg',
        description: 'The Wall is the eleventh studio album by the English progressive rock band Pink Floyd, released on 30 November 1979 by Harvest/EMI and Columbia/CBS Records. It is a rock opera that explores Pink, a jaded rock star whose eventual self-imposed isolation from society forms a figurative wall. The album was a commercial success, topping the US charts for 15 weeks and reaching number three in the UK. It initially received mixed reviews from critics, many of whom found it overblown and pretentious, but later received accolades as one of the greatest albums of all time.'
    },
    {
        id: "2",
        title: "Wish You were here",
        author: "Pink Floyd",
        image: 'https://i.discogs.com/pZnTKUeiKsxSyvX_87YMgccx0bq5sjqThFH9iSNAtAY/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2MjEx/ODEyLTE2MzczMzYw/OTctOTI4MC5qcGVn.jpeg',
        description: 'Wish You Were Here is the ninth studio album by the English rock band Pink Floyd, released on 12 September 1975 through Harvest Records and Columbia Records. Based on material Pink Floyd composed while performing in Europe, Wish You Were Here was recorded over numerous sessions throughout 1975 at EMI Studios (now Abbey Road Studios) in London.'
    },
    {
        id: "3",
        title: "Animals",
        author: "Pink Floyd",
        image: 'https://i.discogs.com/4Hxf3HdivnSYH-o7N3Ri4D3kcrBupW1ZZTbAHaYNmnc/rs:fit/g:sm/q:90/h:600/w:592/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM5MTMy/Mi0xNjQ4NDkwODk1/LTI2NzkuanBlZw.jpeg',
        description: 'Animals is the tenth studio album by the English rock band Pink Floyd, released on 21 January 1977[2] through Harvest Records and Columbia Records. It was self-produced at Pink Floyds Britannia Row Studios in London throughout 1976. The album continued the long-form compositions that made up their previous works, including Wish You Were Here (1975).'
    },

    ];
    listAlbums = () => {

        return this.albumList;
    }
    addAlbum = (album) => {
        album.id= this.nextId();
        this.albumList = this.albumList.concat(album);
    }
    nextId = () => {
        this.id=this.id+1;
        return this.id;
    }
    getAlbum = (id) => {
        return this.albumList[id];
    }
}

const albumService = new AlbumService();
export default albumService;

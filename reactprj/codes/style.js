.container{
    width: 1000px;
    height: auto;
    margin: auto;
}
 .one{
    width: 1000px;
    height: 200px;
 }
 .two{
    width: 300px;
    height: 500px;
    background-color: blue;
    float: left;
    overflow: scroll;
 }
 .three{
    width: 700px;
    height: 500px;
    background-color: blueviolet;
    float: left;
    overflow: scroll;
 }
 @media screen and (max-width:999px){
    .container,.one,.two,.three{
        width:100%;
    }
    .one img{
        width: 100%;
        height: 200px;
    }
 }

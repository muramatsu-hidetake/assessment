/* 演習に必要な設定（消さないでください） */
body, h1, h2, p, form, input, ul {
    margin: 0;
    padding: 0;
  }
  /* 設定ここまで */
  body {
    font-family: "Hiragino Kaku Gothic ProN", sans-serif;
    background-color: thistle;
  }
  

  .char{
      margin:10px auto;
      text-align: center;
  }

  .log{
      font-size:13px;
      margin:15px 20%;
      border:1px solid black;
      padding: 15px;
      background-color: aliceblue;
  }
  .reset{
      margin-top: 20px;
      width: 250px;
      background-color: black;
      color: aliceblue;
  }


  .logarea{
      height:130px;
      width:80%;
      margin:0 auto;
      margin-top: 15px;
      background-color: aliceblue;
      padding:10px;
  }
  .logtext{
      opacity: 0;
}
  
.logone{
    animation-name: one;
    animation-duration: 8.5s;
    animation-iteration-count: 1;
    color:black;
}
@keyframes one{
    0%{
        opacity: 0;
        }
        88.23%{
        opacity: 0;
        }
        94.11%{
        opacity: 0;
        }
        100%{
        opacity: 1;
        }
    
}
.logtwo{
    animation-name: two;
    animation-duration: 7s;
    animation-iteration-count: 1;
}
@keyframes two{
    0%{
        opacity: 0;
        }
        85.71%{
        opacity: 0;
        }
        92.85%{
        opacity: 1;
        }
        100%{
        opacity: 1;
        }
    
}
.logthree{
    animation-name: three;
    animation-duration: 5.5s;
    animation-iteration-count: 1;
}
@keyframes three{
    0%{
        opacity: 0;
        }
        81.81%{
        opacity: 0;
        }
        87.5%{
        opacity: 1;
        }
        100%{
        opacity: 1;
        }
    
}
.logfour{
    animation-name: four;
    animation-duration: 4s;
    animation-iteration-count: 1;
}
@keyframes four{
    0%{
    opacity: 0;
    }
    75%{
    opacity: 0;
    }
    87.5%{
    opacity: 1;
    }
    100%{
    opacity: 1;
    }
}
.logfive{
    animation-name: five;
    animation-duration: 2.5s;
    animation-iteration-count: 1;
}
@keyframes five{
    0%{
        opacity: 0;
    }
    60%{
        opacity: 0;
    }
    80%{
        opacity: 1;
    }
    100%{
        opacity: 1;
    }
}
.logsix{
    animation-name: six;
    animation-duration: 1s;
    animation-iteration-count: 1;
}
@keyframes six{
    0%{
        opacity: 0;
    }
    50%{
        opacity: 1;
    }
    100%{
        opacity: 1;
    }
}
.animation{
    animation-name: animation;
    animation-duration: 10s;
    animation-iteration-count: 1;
    line-height: 16px;
}
@keyframes animation{
    0%{
        position: relative;
        top: -83.33px;
    }
    10%{
        position: relative;
        top: -83.33px;
    }
    15%{
        position: relative;
        top: -66.66px;
    }
    25%{
        position: relative;
        top: -66.66px;
    }
    30%{
        position: relative;
        top: -50px;
    }
    40%{
        position: relative;
        top: -50px;
    }
    45%{
        position: relative;
        top: -33.33px;
    }
    55%{
        position: relative;
        top: -33.33px;
    }
    60%{
        position: relative;
        top: -16.66px;
    }
    70%{
        position: relative;
        top: -16.66px;
    }
    75%{
        position: relative;
        top: 0px;
    }
    85%{
        position: relative;
        top: 0px;
    }
    90%{
        position: relative;
        top: 0px;
    }
    100%{
    }
}

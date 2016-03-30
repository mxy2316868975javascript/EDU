 var hotlist = JSON.parse(xhr.responseText),
                for (var i = 0; i < 10; i++) 
                {
                    //最外层包裹
                    var hotList = document.createElement("div");
                    hotList.className = "list-content";
                    hotList.className += " clearfix";
                    //左侧图片
                    var hotListImg = document.createElement("img");
                    hotListImg.src = hotlist[i].smallPhotoUrl;
                    hotListImg.alt = hotlist[i].name;
                    //名字
                    var hotListTitle = document.createElement("a");
                    hotListTitle.href = hotlist[i].providerLink;
                    var titleContent = document.createTextNode(hotlist[i].name);
                    hotListTitle.appendChild(titleContent);
                    //学习人数
                    var hotPrice = document.createElement("div");
                    var hotPriceContent = document.createTextNode(hotlist[i].price);
                    //图标..
                    var hotPriceIcon = document.createElement("i");
                    hotPriceIcon.className = "iconfonts";
                    hotPrice.appendChild(hotPriceIcon);
                    hotPrice.appendChild(hotPriceContent);

                    //集中插入
                    hotList.appendChild(hotListImg);
                    hotList.appendChild(hotListTitle);
                    hotList.appendChild(hotPrice);
                    ranking.appendChild(hotList);
                }
                clearInterval(timer);
                var timer = setInterval(move, 5000);
                var iNow = 0;

                function move() {
                    var asideLi = getByClassName(document,'list-content');
                    var hot_list = getByClassName(document, "ranking-list")[0];
                    // 每一次移动的高度是 liHeight 加上20px
                    var liHeight = asideLi[0].offsetHeight + 20;
                    if (iNow == hotlist.length / 2) {
                        iNow = 0;
                        hot_list.style.top = 0;
                    }
                    iNow++;
                    hot_list.style.top = -liHeight * iNow + 'px';
                }
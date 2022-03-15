console.log("ssss");
const songCardList = document.querySelectorAll(".song-card");
const songCardRaw = `
<ul class="menu-list">
<div class="div-thump"><img src="img/main-thump.png" alt=""></div>
<div class="div-title-wrap">
    <p><span class="tille-name-sub">Chạy Về Khóc Với Anh</span></p>
    <div class="stats-song">
        <div class="stats-item singer-name">
            <i class=" fa-solid fa-heart "></i> <span>1.1M</span>
        </div>
        <div class="stats-item singer-name ">
            <i class="fa-solid fa-headphones "></i> <span>1.1M</span>
        </div>
    </div>
</div>
<div class="submenu-drop submenu-info">
    <ul class="submenu-drop--info ">
        <li class="">
            <span>NGHỆ SĨ</span>
            <p><a href="">ERIK</a></p>
        </li>
        <li class="">
            <span>ALBUM</span>
            <p> <a href="">Chạy Vê Khóc Với Anh (Single)</a></p>
        </li>
        <li class="">
            <span>SÁNG TÁC</span>
            <p><a href="">Nguyễn Phúc Thiện </a></p>
        </li>
    </ul>
</div>
</ul>
<ul class=" menu-list ">
<div class="group-button-menu ">
    <button class="button-item ">
        <i class="fa-solid fa-download"></i>
        <span>Tải xuống</span>
    </button>
    <button class="button-item ">
        <i class="fa-solid fa-bars"></i>
        <span>Lời bài hát</span>
    </button>
    <button class="button-item ">
        <i class="fa-solid fa-ban"></i>
        <span>Chặn</span>
    </button>
</div>
</ul>
<ul class="menu-list ">
<li class="menu-list-lastchild-li">
    <button class="li-button-item">
        <i class="fa-solid fa-plus"></i>
        <span>Thêm vào danh sách phát</span>
    </button>
</li>
<li class="menu-list-lastchild-li">
    <button class="li-button-item">
        <i class="fa-solid fa-forward-step"></i>
        <span>Phát tiếp theo</span>
    </button>
</li>
<li class="menu-list-lastchild-li">
    <a href="https://zingmp3.vn/rbt/bai-hat/ZZO0F8BW.html " target="_blank ">
        <button class="li-button-item">
            <i class="fa-solid fa-phone-volume"></i>
            <span>Cài đặt nhạc chờ</span>
        </button>
    </a>
</li>
<li class="menu-list-lastchild-li">
    <div class="menu-list--submenu ">
        <button class="li-button-item">
            <i class="fa-solid fa-list"></i>
            <span>Thêm vào playlist</span>
            <i class="fa-solid fa-angle-right"></i>
        </button>
        <div class="submenu-drop submenu-content">
            <div class="content-input">
                <input type="text" placeholder="Tìm playlist">
            </div>
            <ul class="submenu-drop--content">
                <li class="menu-list-lastchild-li">
                    <button class="li-button-item">
                        <i class="fa-solid fa-square-plus"></i>                                    
                        <span>Tạo playlist mới</span>
                    </button> </li>
                <li class="menu-list-lastchild-li">
                    <button class="li-button-item">
                        <i class="fa-solid fa-music"></i>                                    
                        <span>K-POP</span>
                    </button> </li>
                <li class="menu-list-lastchild-li">
                    <button class="li-button-item">
                        <i class="fa-solid fa-music"></i>
                        <span>US-UK</span>
                    </button>
                </li>
                <li class="menu-list-lastchild-li">
                    <button class="li-button-item">
                        <i class="fa-solid fa-music"></i>
                        <span>POP-VN</span>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</li>
<li class="menu-list-lastchild-li">
    <button class="li-button-item">
        <i class="fa-solid fa-comment-dots"></i>
        <span>Bình luận</span>
    </button>
</li>
<li class="menu-list-lastchild-li">
    <button class="li-button-item">
        <i class="fa-solid fa-copy"></i>
        <span>Sao chép link</span>
    </button>
</li>
<li class="menu-list-lastchild-li">
    <div class="menu-list--submenu ">
        <button class="li-button-item">
            <i class="fa-solid fa-share"></i>
            <span>Chia sẻ</span>
            <i class="fa-solid fa-angle-right "></i>
        </button>
        <div class="submenu-drop submenu-share">
            <ul class=" submenu-drop--share ">
                <li class="menu-list-lastchild-li ">
                    <button class="li-button-item ">
                        <i class="fa-brands fa-facebook-square"></i>
                        <span>Facebook</span>
                    </button> </li>
                <li class="menu-list-lastchild-li ">
                    <button class="li-button-item ">
                        <img src="https://img.icons8.com/color/48/000000/zalo.png"/>
                        <span>Zalo</span>
                    </button>
                </li>
                <li class="menu-list-lastchild-li ">
                    <button class="li-button-item ">
                        <i class="fa-solid fa-code"></i>                                    
                        <span>Mã nhúng</span>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</li>
</ul>
`

/**/
const divMenu = document.createElement("div")
divMenu.innerHTML = songCardRaw
divMenu.className = "menu"
divMenu.style.zIndex = 100;
/**/

/**/
songCardList.forEach((songCard) => {
    songCard.addEventListener("contextmenu", (e) => handleSongCard(songCard, e))
})
document.addEventListener("click", (e) => {
    const rectdDivMenu = divMenu.getBoundingClientRect();
    if ((e.pageX < rectdDivMenu.left || e.pageX > rectdDivMenu.right) ||
        (e.pageY < rectdDivMenu.top || e.pageY > rectdDivMenu.bottom)) {
        divMenu.style.display = 'none'
    }
})

function handleSongCard(songCard, e) {
    // add menu
    divMenu.style.display = 'block'
    songCard.appendChild(divMenu);
    //
    var rectSongCard = songCard.getBoundingClientRect();
    var rectWidth = rectSongCard.right - rectSongCard.left;
    var rectHeight = rectSongCard.bottom - rectSongCard.top;
    //
    e.preventDefault();
    //
    var pointX = e.pageX;
    var pointY = e.pageY;
    var distanceX = pointX - rectSongCard.left;
    var distanceY = pointY - rectSongCard.top;
    if (distanceY > rectHeight * 0.5) {
        divMenu.style.top = `200%`;
    } else {
        console.log(divMenu.clientHeight)
        divMenu.style.top = distanceY + divMenu.clientHeight / 2 + 'px';
        console.log(divMenu.style.top)
    }

    if (distanceX < rectWidth * 0.7) {
        divMenu.style.left = distanceX + divMenu.clientWidth / 2 + 10 + `px`;
    } else {
        divMenu.style.left = distanceX - divMenu.clientWidth / 2 - 10 + `px`;
    }
}
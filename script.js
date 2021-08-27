function filtersSlice() {
    const filterButton = document.querySelector('.filter-button')
    const letfSection = document.querySelector('.left-section')
    const backgroundField = document.querySelector('.background-field')
    const body = document.querySelector('body')
    const xButton = document.querySelector('.x-button-2')
    const applyButton = document.querySelector('.apply-button')

    function openFiltersField () {
        letfSection.classList.toggle("visible")
        letfSection.classList.toggle('filters-field-style')
        backgroundField.classList.toggle('background-field-style')
        body.classList.toggle("hidden")
        xButton.classList.toggle("visible")
        applyButton.classList.toggle("visible")
    }
    
    window.addEventListener("resize", (e)=> {
        if(window.screen.width>1200){
            letfSection.classList.remove("visible")
            letfSection.classList.remove('filters-field-style')
            backgroundField.classList.remove('background-field-style')
            body.classList.remove("hidden")
            xButton.classList.remove("visible")
            applyButton.classList.remove("visible")
        }
    })
    
    document.addEventListener("click", (e)=> {
        if(e.target === backgroundField) {
            letfSection.style.animationName = "to-left"
            setTimeout(()=> {
                openFiltersField();
                letfSection.style.animationName = "to-right"  
            },700)
            
            
        }
    })
    xButton.addEventListener("click", (e) => {
        letfSection.style.animationName = "to-left"
        setTimeout(()=>{
            openFiltersField();
           letfSection.style.animationName = "to-right" 
          },700)
        
        
    
        
    })
    
    
    filterButton.addEventListener("click",openFiltersField)
    applyButton.addEventListener("click",(e) => {
        letfSection.style.animationName = "to-left-apply"
        setTimeout(()=> {
            openFiltersField()
            letfSection.style.animationName = "to-right"
        },700)

    })
}
function rangePrice() {
    const pricesRange = document.querySelector(".prices-range")
    const price = document.querySelector(".price")

    pricesRange.addEventListener("mousemove", (e)=> {
        price.innerHTML =`${pricesRange.value * 500} ֏` 
    })
}
function favouriteList() {
    const likedButton = document.querySelectorAll('.liked-button')
    const dataImg = {}
    const src1 = "./images/Vector_42.svg"
    const src2 = "./images/Vector_43.svg"

    function getSrc() {
        if(!JSON.parse(localStorage.getItem("data"))){
            likedButton.forEach((el,i)=> {
                dataImg[i] = src1
            })
            localStorage.setItem("data", JSON.stringify(dataImg))
        }else {
            JSON.parse(localStorage.getItem("data"))
        }
        return dataImg
    }

    getSrc()

    function drawImg() {
        const data = JSON.parse(localStorage.getItem("data"))
        likedButton.forEach((el,i) => {
            const heartImg = document.createElement("img")
            heartImg.src = data[i]
            el.appendChild(heartImg)
        })

    }
    drawImg()

    function changeImg() {
        const data = JSON.parse(localStorage.getItem("data"))
        likedButton.forEach((el,i)=> {
            el.addEventListener("click", (e)=> {
                if(data[i] === src1){
                    data[i] = src2
                }else {
                    data[i] = src1
                }
                localStorage.setItem("data", JSON.stringify(data))
                likedButton.forEach(item=> {
                    item.innerHTML = ""
                })
                drawImg()
            })
        })

    }
    changeImg()

}
function basketList() {
    const basketButton = document.querySelectorAll(".basket-button")
    let dataBaskets = {}
    const src1 = "./images/Frame_42.svg"
    const src2 = "./images/Frame_43.svg"
    let basketCount = document.querySelector(".basket-count")
     basketCount.innerText = 0   

    function getSrc() {
        if(!JSON.parse(localStorage.getItem("datas"))){
            basketButton.forEach((el,i)=> {
                dataBaskets[i] = src1
            })
            localStorage.setItem("datas", JSON.stringify(dataBaskets))
        }else {
            JSON.parse(localStorage.getItem("datas"))
        }

        if(!JSON.parse(localStorage.getItem("count"))){
            localStorage.setItem("count", JSON.stringify(basketCount.innerText))
        }else {
            JSON.parse(localStorage.getItem("count"))
        }
    }

    getSrc()
    function drawImg() {
        const data2 = JSON.parse(localStorage.getItem("datas"))
        basketButton.forEach((el,i)=> {
            const basketImg = document.createElement("img")
            basketImg.src = data2[i]
            el.appendChild(basketImg)
        })
    }
    drawImg()

    function changeImg() {
        const data2 = JSON.parse(localStorage.getItem("datas"))
        let count = JSON.parse(localStorage.getItem("count"))
        basketButton.forEach((el,i) => {
            el.addEventListener("click", (e)=> {
                if(data2[i] === src1) {
                    data2[i] = src2
                    count++
                }else {
                    data2[i] = src1
                    count--
                }
                localStorage.setItem("datas", JSON.stringify(data2))
                basketButton.forEach(item=> {
                    item.innerHTML = ""
                    
                })
                localStorage.setItem("count", JSON.stringify(count))
                drawImg()
                drawCount()
                
            })
        })
    }
    changeImg()

    function drawCount() {
        let count = JSON.parse(localStorage.getItem("count"))
        basketCount.innerText = count
    }
    drawCount()
}

filtersSlice()
basketList()
favouriteList()
rangePrice()



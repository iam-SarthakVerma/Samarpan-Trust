const options = {
    threshold: 0.25
};

const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, options);

//Total Number of people donated counter

let hasStarted=false
const counter=document.getElementById('donation-received')
const counterObserver=new IntersectionObserver((entries)=>
{
    
    entries.forEach((entry)=>
    {
        
        if(entry.isIntersecting && !hasStarted)
        {
            hasStarted=true
            let count=0
            const target=300
                const timer=setInterval(()=>
                {
                    if(count>=target)
                    {
                        clearInterval(timer)
                        counterObserver.disconnect()
        
                    }
                    else
                    {
                        count++
                    }

                    counter.textContent=`${count}+`
                },10)
        }
    })
},options)


document.addEventListener("DOMContentLoaded", () => {
    animationObserver.observe(document.querySelector('#moto'));
    animationObserver.observe(document.querySelector('.summarize'));
    counterObserver.observe(document.querySelector('.leftside-leftpart-container'))
});

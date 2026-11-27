function creat()
{
    const para=document.createElement("p");
    para.textContent="Second Script";
    document.body.appendChild(para);
    console.log("Testing create method");
}

const butt2=document.querySelectorAll("button");

for(const button of butt2)
{
    button.addEventListener("click",creat);

}

console.log("Testing");
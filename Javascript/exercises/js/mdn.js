function createParagraph()
{
	const para = document.createElement("p");
	para.textContent="You clicked the button!";
	document.body.appendChild(para);
	console.log("Testing");
}
	console.log("Testing2");

const buttons = document.querySelectorAll("button");
console.log(buttons);
for (const button of buttons) 
{
  button.addEventListener("click", createParagraph);
}


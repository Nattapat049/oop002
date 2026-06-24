export{};
let student: string[] = ["Mark","Jame","Jim","Alice","Max"]
let mark : number[] = [84, 75, 64, 85, 74];
student.push("Jame");
mark.push(57);
for(let i=0; i<6; i++){
    console.log(`${student[i]} สอบได้ : ${mark[i]} คะแนน`);
}
student.pop();
student.forEach((name,index) =>{
    console.log(`นักเรียนคนที่ ${index+1}:${name}`);
});
// Q1. 주어진 배열을 String으로 변환
{
  const fruits = ["apple", "banana", "orange"];
  //console.log(fruits.toString());
  const result = fruits.join("");
  console.log(result);
}

// Q2. 주어진 String을 배열로 변환
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  const result = fruits.split(", ");
  console.log(result);
}

// Q3. 주어진 배열의 순서를 거꾸로: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array); // 배열 자체를 변화시킨다
}

// Q4. 첫번째, 두번째 요소를 제외한 새로운 배열 생성
{
  const array = [1, 2, 3, 4, 5];
  //const result = array.splice(0, 2);
  //console.log(array); // 원본 배열 자체에서 제거
  //console.log(result); // 제거된 요소

  // 새로운 배열을 생성해야 하기 떄문에 오답
  // slice 사용
  const result = array.slice(2, 5);
  console.log(result);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
  /* 
  const result = students.filter((student) => {
    if (student.score === 90) return student;
  }); 
  */
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  // 배열에서 조건에 맞는 것 찾기
  const result = students.some((student) => student.score < 50); // 배열 어떤 요소 하나라도
  console.log(result);

  const result2 = !students.every((student) => student.score >= 50); // 배열 모든 요소
  console.log(result2);
}

// Q9. compute students' average score
{
  // reduce: 모든 배열을 돌면서 값을 누적할 때
  // reduceRight: 배열의 맨 뒤부터
  const result = students.reduce((prev, curr) => prev + curr.score, 0); // initial 0 == prev
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students.map((student) => student.score).join(", ");
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join(", ");
  console.log(result);
}

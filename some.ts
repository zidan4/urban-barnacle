
type Persons = {
  kind: "student" // discriminant property
  name: "",
  age: 4,
  isStudent: false
};
type Personss = {
  kind: "teacher" // discriminant porperty
  name: "",
  age: 4,
  isStudent: false
};

type classroom = Persons | Personss

function isCorrect( lesson: classroom): boolean {
  if (lesson.kind === "teacher") {
    return lesson.isStudent == false
  }else {
    return lesson.isStudent
  }
}


const sume = new Set<string> ()
sume.add("happy")

const pod = new Map<string, number>()
pod.set("1", 3)


type userMetrics = { // dynamic type
  [key: number]: string
}


const colors = ["red", "green", "blue"] as  const;
type A = { name: string };
const a = { name: "kygo" } as const satisfies A;


const nameAndAge: [ string, number] = ["rose", 3]   // { , , age } try commas



type Point2d = {
  x: number
  y: number
}

type Point3d = Point2d & {
  z: number
};

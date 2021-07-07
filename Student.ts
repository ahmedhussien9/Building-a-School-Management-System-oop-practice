
export class Student {
    private id: number;
    private name: string;
    private grade: number;
    private feesPaid: number;
    private feesTotal: number;

    /**
     * To Create a new student by intializing.
     * Fees for every student is $30,000.
     * Fees paid intially is 0.
     * @param id for the student : unique
     * @param name of the student.
     * @param grade of the student
     */
    constructor(id: number, name: string, grade: number) {
        this.feesPaid = 0;
        this.feesTotal = 30000;
        this.id = id;
        this.name = name;
        this.grade = grade;
    }

    /**
     * Used to update the student's grade.
     * @param grade new grade of the student.
     */
    public setGrade(grade: number): void {
        this.grade = grade;
    }

}
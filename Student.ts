
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


    /**
     * Keep adding the fees to feesPaid Field.
     * Add the fees to the fees paid.
     * The school is going to recieve the funds
     * @param fees 
     */
    public payFees(fees: number): void {
        this.feesPaid += fees;
        // @Todo update the school total money earned
    }

    /**
     * 
     * @returns id of the student
     */
    public getId(): number {
        return this.id;
    }

    /**
     * 
     * @returns the grade of the student.
     */
    public getGrade(): number {
        return this.grade;
    }

    /**
     * 
     * @returns fees paid by the student
     */
    getFeesPaid(): number {
        return this.feesPaid;
    }

    /**
     * 
     * @returns the total fees of the student
     */
    getFeesTotal(): number {
        return this.feesTotal;
    }

    

}
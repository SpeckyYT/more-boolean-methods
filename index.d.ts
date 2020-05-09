declare global {
    interface Boolean {
        /** Returns a random boolean */
        random(): boolean;
        /** Returns the negated value of the boolean */
        not(): boolean;
        /** Converts the boolean to a string */
        stringify(): string;
        /** Converts the boolean to a number */
        numberify(): number;
        /** Converts the boolean to an array */
        arrayify(): Array<Boolean>;
        /** Returns true */
        true(): boolean;
        /** Returns false */
        false(): boolean;
        /** Returns the AND value of the boolean and the input */
        and(b:boolean): boolean;
        /** Returns the OR value of the boolean and the input */
        or(b:boolean): boolean;
        /** Returns the XOR value of the boolean and the input */
        xor(b:boolean): boolean;
    }
}

function moreBooleanMethods(): void;

export = moreBooleanMethods;

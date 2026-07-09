DECLARE
BEGIN
    FOR rec IN (
        SELECT c.CustomerID, l.LoanID, l.InterestRate, c.Age
        FROM Customers c
        JOIN Loans l ON c.CustomerID = l.CustomerID
    )
    LOOP
        IF rec.Age > 60 THEN
            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE LoanID = rec.LoanID;
        END IF;
    END LOOP;

    COMMIT;
END;
/

DECLARE
BEGIN
    FOR rec IN (
        SELECT CustomerID, Balance
        FROM Customers
    )
    LOOP
        IF rec.Balance > 10000 THEN
            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE CustomerID = rec.CustomerID;
        END IF;
    END LOOP;

    COMMIT;
END;
/

SET SERVEROUTPUT ON;

DECLARE
BEGIN
    FOR rec IN (
        SELECT c.CustomerName, l.LoanID, l.DueDate
        FROM Customers c
        JOIN Loans l
        ON c.CustomerID = l.CustomerID
        WHERE l.DueDate BETWEEN SYSDATE AND SYSDATE + 30
    )
    LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Loan ' || rec.LoanID ||
            ' for ' || rec.CustomerName ||
            ' is due on ' || rec.DueDate
        );
    END LOOP;
END;
/
CREATE TABLE Kinobillett    --Creates the table with columns that match the attributes of the ticket object
(
    film VARCHAR(30) NOT NULL,
    antall INTEGER,
    fornavn VARCHAR(30) NOT NULL,
    etternavn VARCHAR(30) NOT NULL,
    telefonnr VARCHAR(30) NOT NULL,
    epost VARCHAR(30) NOT NULL
);
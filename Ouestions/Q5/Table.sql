-- Create User Table
CREATE TABLE User1 (
    UserID INT IDENTITY(1,1) PRIMARY KEY,
    UserName VARCHAR(50),
    CreatedDate DATE,
    EmailID VARCHAR(100) UNIQUE
);
 
-- Create Asset Table
CREATE TABLE Asset (
    AssetID INT IDENTITY(1,1) PRIMARY KEY,
    Name VARCHAR(100),
    BrandName VARCHAR(50),
    PurchasedDate DATE,
    Warranty VARCHAR(5),
    Status VARCHAR(20) DEFAULT 'InStock' CHECK (Status IN ('INSTOCK','Assigned','Scraped'))
);
 
-- Create Challan Table
CREATE TABLE Challan (
    ChallanID INT IDENTITY(1,1) PRIMARY KEY,
    UserID INT,
    CreatedDate DATE,
    ChallanStatus VARCHAR(20) DEFAULT 'Issued' CHECK (ChallanStatus IN ('Issued','Returned')),
    ChallanReturnDate DATE,
    FOREIGN KEY (UserID) REFERENCES User1(UserID)
);
 
-- Create ChallanItem Table
CREATE TABLE ChallanItem (
    ChallanItemID INT IDENTITY(1,1) PRIMARY KEY,
    ChallanID INT,
    AssetID INT,
    FOREIGN KEY (ChallanID) REFERENCES Challan(ChallanID),
    FOREIGN KEY (AssetID) REFERENCES Asset(AssetID)
);
 
-- Insert records into User Table
SET IDENTITY_INSERT User1 ON
INSERT INTO User1 (UserID, UserName, CreatedDate, EmailID)
VALUES 
    (1, 'Rohan', '2022-01-03', 'Rohan@gmail.com'),
    (2, 'Megha', '2022-02-03', 'megha@gmail.com'),
    (3, 'Reema', '2022-01-02', 'reema@gmail.com'),
    (4, 'Mitul', '2022-02-03', 'mitul@gmail.com');
SET IDENTITY_INSERT User1 OFF
 
-- Insert records into Asset Table
INSERT INTO Asset (Name, BrandName, PurchasedDate, Warranty, Status)
VALUES 
    ('Keyboard001', 'Logitech', '2021-01-01', 'Yes', 'Assigned'),
    ('Mouse001', 'HP', '2021-02-01', 'Yes', 'Assigned'),
    ('Keyboard002', 'Logitech', '2021-03-01', 'No', 'Assigned'),
    ('Keyboard003', 'HP', '2021-03-01', 'Yes', 'Assigned'),
    ('Monitor002', 'HP', '2021-02-01', 'Yes', 'InStock'),
    ('Monitor003', 'HP', '2021-02-01', 'Yes', 'InStock');
 
-- Insert records into Challan Table
INSERT INTO Challan (UserID, CreatedDate, ChallanStatus, ChallanReturnDate)
VALUES 
    (1, '2022-12-03', 'Issued', NULL),
    (2, '2022-12-03', 'Returned', '2022-12-05');
 
-- Insert records into ChallanItem Table
INSERT INTO ChallanItem (ChallanID, AssetID)
VALUES 
    (1, 1),
    (1, 2),
    (2, 3),
    (2, 4); 
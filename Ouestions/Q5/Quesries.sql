-- Create a query to find out the records from the user table where user name starts with ‘R’
select * from User1
where UserName like 'R%'

-- Update the Warranty column value to “No” of Asset Table where AssetName is Monitor002 
Update Asset
set Warranty = 'No'
where Name = 'Monitor002'

-- Find out list of users for them no challan is created.
select * from Challan
where CreatedDate = NULL

-- Find out the list in following manner
-- ChallanNumber,UserName,AssetQty,AssetNames

SELECT User1.UserName, COUNT(ChallanItem.ChallanItemID) AS AssetQty
FROM User1 
LEFT JOIN Challan ON User1.UserID = Challan.UserID
LEFT JOIN ChallanItem  ON Challan.ChallanID = Challan.ChallanID
LEFT JOIN Asset ON ChallanItem.AssetID = Asset.AssetID
GROUP BY User1.UserName
HAVING COUNT(ChallanItem.ChallanItemID) = 0
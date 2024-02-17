DROP TABLE IF EXISTS Goals;
CREATE TABLE IF NOT EXISTS Goals (GoalId INTEGER PRIMARY KEY, GoalName TEXT);
INSERT INTO Goals (GoalID, GoalName) VALUES (1, 'First goal'), (2, 'Goal #2'), (3, 'Goal (3)');

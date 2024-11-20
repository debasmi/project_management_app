STATUS_CHOICES=[
    ('new','New'),
    ('open', 'Open'),
    ('fixed', 'Fixed'),
    ('rejected', 'Rejected'),
    ('in_progress', 'In Progress'),
    ('closed', 'Closed'),
    ('test_passed', 'Test Passed'),
]

PROJECT_ROLES=[
    ('admin', 'Admin'),#all permisiions
    ('manager', 'Manager'),
    ('team lead', 'Team Lead'),
    ('staff', 'Staff')
    
]

TASK_TYPES = [
    ('task', 'Task'),
    ('story', 'Story'),
    ('bug', 'Bug')
]
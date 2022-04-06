@echo off
set /p commitText="Enter Commit Text: "

powershell -c git add .; git commit -m "%commitText%"; git push

pause
cls
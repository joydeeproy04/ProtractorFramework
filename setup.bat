@echo off
cmd /c "npm install -g protractor"
cmd /c "npm install -g webdriver-manager"
cmd /c "npm install -g typescript"
cmd /c "npm install"
cmd /c "node node_modules\protractor\node_modules\webdriver-manager update"
cmd /c "node node_modules\protractor\node_modules\webdriver-manager update --ie"
# Pre-requisites for working with this framework
    1. NodeJS needs to be installed.
    2. Java JDK needs to be installed.
    3. Before setting up your framework for use, you need to be out of PwC network. Node modules will not be downloaded if you are connected to the PwC network.

# Instructions for installing

    1. Make sure there is no "node_modules" folder present in your framework folder. If the folder is present, please make sure to delete the folder first and then continue to step 2.

    2. Double click on setup.bat.
        - This step will install Protractor, Webdriver-Manager, typescript globally in your system. Then it will add all the dependencies required to run this framework. If the modules are installed in your system then also don't skip this step because it will install dependencies locally as well.

    Your framework is ready for use.

# Folder Structure and its significance

    1. Compiled_JS_Files
        - This folder contains all the compiled JS Files
        - NO MODIFICATION IS REQUIRED IN THIS FOLDER FROM USER.

    2. Data
        - This folder contains 1 file, "Data.xlsx". DO NOT RENAME THIS WORKBOOK AND THE FIRST WORKSHEET NAMED "CommonTestData". However, you can rename the rest of the worksheets according to your application modules.

    3. FunctionLibrary
        - This folder will have all the Page Classes in which you can keep the locators and the functions related to that page.
        - You will need to require these files as modules inside your test scripts so that you can use the locators and functions defined.

    4. node_modules
        - This folder contains all the third-party node module dependencies required to run this framework.
        - NO MODIFICATION IS REQUIRED IN THIS FOLDER FROM USER.

    5. Results
        - This folder will have the Execution Reports inside it.
        - Fresh folder will be created for each execution with Time stamp attached to it e.g. "Run_5_4_2018_10_25_14".

    6. TestSpecs
        - This folder will have all the Spec files(Test Script files).
        - The spec files should be kept inside each modules folder.
        - Modules can be based on the project or Sprint.

    7. Utilities
        - This folder contains CommonUtils.ts file.
        - YOU CAN ADD MORE COMMON FUNCTIONS IF YOU WANT. BUT PLEASE DO NOT DELETE THE ONES THAT ARE ALREADY PRESENT.

    8. config.ts
        - NO MODIFICATION IS REQUIRED IN THIS FILE FROM USER.

    9. debug.log
        - This file will have the debugger log that will be generated at runtime.

    10. execute.bat
        - This file will be used to execute the test cases that are marked 'Y' in the Run Manager file.

    11. package.json
        - NO MODIFICATION IS REQUIRED IN THIS FILE FROM USER.

    12. RunManager.xlsx
        - DO NOT RENAME THIS WORKBOOK AND THE FIRST WORKSHEET NAMED 'Master'.
        - Run Manager needs to be modified by the user.
        - Module names which are present in TestSpecs folder should be entered in 'Master' sheet under 'Test Scenario' Column.
        - 'RunStatus' Flag should be made 'Y'/'N' depending on the execution requirement. 'Y' flag triggers execution for the particular module and 'N' flag skips the execution for that module.
        - There should be a separate sheet for all the modules which are present in 'Master' sheet of Run Manager.xlsx
        - Separate module sheets should have Test Case names (this should be same as the name of .ts file under that module) and the corresponding RunStatus as 'Y'/'N' ('Y'/'N' flag should follow the same logic as Master sheet).
        - Platform should be PC or Mobile(Mobile automation is still not integrated in the framework).
        - Browser should be firefox or chrome (IE is not supported by the framework for now).

    13. setup.bat
        - NO MODIFICATION IS REQUIRED IN THIS FILE FROM USER.

    14. tsconfig.json
        - NO MODIFICATION IS REQUIRED IN THIS FILE FROM USER.

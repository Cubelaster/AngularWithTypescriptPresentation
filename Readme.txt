Angular with TypeScript

    Prerequisites:
        -Angular
        -JavaSript / JQuery
        -HTML
        -CSS

    Installation:
        -typescritlang.org
            -VisualStudio - installed with it, latest version available for download 
            -VS Code - built in

        -npm (Node.js package manager)
            - npmjs.com
                - sign up and download Node.js installer
                - npm install -g typescript
                - check version of the TypeScript compiler with - tsc -v 

        -tsd (TypeScript Definition Manager)
            - npm install tsd -g
            - tsd is a tool for supporting IntelliSense for TypeScript, Angular and many more
            - DefinitelyTyped is THE library for TypeScript definition files and tsd downloads definition files from there

    Project:
        -need tsconfig.json - defines compilerOptions
        -for VSCode you need tasts.json - defines tasks such as build tasks
        -building the project results in transpiling .ts files to .js
        -running from VSCode requires some sort of server - easiest one to get is npm install -g http-server
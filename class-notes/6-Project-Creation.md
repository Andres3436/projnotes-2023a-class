# Build Script

## Introduction
A build script is a file that is started by a build plan. The build script prepares output from generated files.
To prepare Java code for execution, EGL puts the javac (Java compiler) command and its parameters in the build plan. The build plan then sends the javac command to the build server, along with the input required by the command.

## Methods
-	Declaring variables

-	Using local variables. build.gradle

def dest = "dest"

task copy(type: Copy) {

    from "source"
    
    into dest
    
}

-	Using extra properties

-	build.gradle

apply plugin: "java"

ext {

    springVersion = "3.1.0.RELEASE"
    
    emailNotification = "build@master.org"
    
}

sourceSets.all { ext.purpose = null }

sourceSets {

    main {
    
        purpose = "production"
        
    }
    
    test {
    
        purpose = "test"
        
    }
    
    plugin {
    
        purpose = "production"
        
    }
    
}

task printProperties << {

    println springVersion
    
    println emailNotification
    
    sourceSets.matching { it.purpose == "production" }.each { println it.name }
    
}

## Results
List and map literals, build.gradle

// List literal

test.includes = ['org/gradle/api/**', 'org/gradle/internal/**']

List<String> list = new ArrayList<String>()
    
list.add('org/gradle/api/**')
    
list.add('org/gradle/internal/**')
    
test.includes = list
    
// Map literal.
    
Map<String, String> map = [key1:'value1', key2: 'value2']
    
// Groovy will coerce named arguments
    
// into a single map argument
    
apply plugin: 'java'
    
13.5.5. Closures as th

## Discussions
Gradle provides a domain specific language, or DSL, for describing builds. This build language is based on Groovy, with some additions to make it easier to describe a build.
A build script can contain any Groovy language element. Gradle assumes that each build script is encoded using UTF-8.

## References
1. https://www.ibm.com/docs/en/rbd/9.6?topic=guide-build-scripts
2. http://sorcersoft.org/project/site/gradle/userguide/writing_build_scripts.html

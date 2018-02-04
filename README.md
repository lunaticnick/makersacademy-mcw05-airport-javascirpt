![USEDPOST](https://img.shields.io/badge/USES-HTML-green.svg?style=for-the-badge) ![USEDPOST](https://img.shields.io/badge/USES-GIT-orange.svg?style=for-the-badge) ![USEDPOST](https://img.shields.io/badge/USES-Javascript-blue.svg?style=for-the-badge)


Airport Challenge using Javascript
=================

```
        ______
        _\____\___
=  = ==(____MA____)
          \_____\___________________,-~~~~~~~`-.._
          /     o o o o o o o o o o o o o o o o  |\_
          `~-.__       __..----..__                  )
                `---~~\___________/------------``.``.`
                ======(_________)

```

## Challenge Synopsis
Write a javascript program that resembles the Air-Traffic Control system of an airport (actually this is a re-implementation of the airport challenge using javascript, which was used as a second example in order to familiarise ourselves with javascript.)

Planes can only land or take-off when weather is good, so apart from writing a program that controls the plane flow in and out of the airport, we also need to randomise weather.

Also to assist the adoption of the program in random airports, we need to have the ability to scale up the airport.

## User Stories
```
As an air traffic controller
So I can get passengers to a destination
I want to instruct a plane to land at an airport
```
```
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport
```
```
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy
```
```
As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy
```
```
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full
```
```
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```

## How to use this app

First you need to clone the depository on your local machine. To do so, please open your favourite CLI and use the following commands:

```
git clone git@github.com:lunaticnick/makersacademy-mcw05-airport-javascript.git local_directory_name
cd local_directory_name
```

Then there are two options:

**See the testing part of the project**
To have a look at the test for this app (written in [Jasmine](https://jasmine.github.io)), please open ```SpecRunner.html``` located in the root.

**Use the app**

Then you can start playing the game by using the following commands:

- Create a new airport instance : ```airport = new Airport```
- Create a new plane instance: ```plane = new Plane```
- Dock a plane:  ```airport.dockPlane(plane)```
- Launch a plane: ``` airport.launchPlane(plane)```

Weather is controlled by a separate function, which randomises weather conditions, and we use dependancy injection to incorporate this in the program.module (called ***weaether***) that randomises weather conditions.

Create an airport and two planes:
```
> airport = new Airport
   Airport {capacity: 10, storedplanes: Array(0), weather: Weather}

> plane1 = new Plane
   Plane {isFlying: false}

> plane2 = new Plane
   Plane {isFlying: false}
```

Dock the planes into the airports
```
> airport.dockPlane(plane1)
    airport.js:22 Plane docked


```

Plane cannot be docked/land if already in airport
```
> airport.dockPlane(plane1)
  plane.js:15 Uncaught Error: Plane is already on ground
```

Planes can be launched
```
> airport.launchPlane(plane1)
    airport.js:35 Plane launched
```

Planes cannot be launched if there is bad weather
```
>  airport.launchPlane(plane1)
    airport.js:27 Uncaught Error: Cannot Take off due to weather
```

Planes cannot be launched if already in the air
```
> airport.launchPlane(plane1)
    plane.js:8 Uncaught Error: Plane is already flying
```


Planes cannot be docked/land if there is bad weather
```
> airport.dockPlane(plane1)
    airport.js:14 Uncaught Error: Cannot Land due to weather
```

Airport default capacity of 10 planes can be overridden
```
airport2 = new Airport(5)
Airport {capacity: 5, storedplanes: Array(0), weather: Weather}
```

## Supplementary Information
  This can be found in the **[00_notes](https://github.com/lunaticnick/airport_challenge/tree/master/00_notes)** folder

 

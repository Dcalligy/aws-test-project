''' Algorithm for Senior Project'''
'''Required elements for answers table: ID, AvailableMornings, AvailableAfternoons, AvailabilityEvening, Project1, 
   Project2, Project3, Project4, Project5, Project6, SkillProgramming, SkillWebDesign, SkillMechEngineering,
   SkillNetworkDesign, SkillDatabase, SkillCompEngineering'''
import math
import boto3

'This is where we need to get the list from the database'

answerList = [
    [1, True, False, False, True, False, True, False, False, False, True, False, False, False, True, True],
    [2, True, True, False, False, True, True, False, False, False, True, True, False, False, False, False],
    [3, True, True, True, False, False, True, False, False, False, True, True, False, False, False, False],
    [4, False, True, False, True, False, False, True, False, False, True, False, False, False, False, True],
    [5, False, False, True, False, False, False, False, True, False, False, False, True, False, True, False],
    [6, True, False, True, True, False, True, False, False, False, True, False, False, False, True, False],
    [7, False, True, True, False, False, False, False, True, True, False, False, False, True, False, True],
    [8, True, True, False, False, True, False, False, False, True, True, False, True, False, True, True],
    [9, False, False, True, False, False, False, True, False, True, True, True, True, False, False, False],
    [10, True, False, True, False, True, False, True, False, True, False, True, False, True, False, True],
    [11, False, True, False, True, False, True, False, True, False, True, False, True, False, True, False],
    [12, False, True, True, False, False, False, True, True, False, False, True, True, False, False, False],
    [13, True, False, False, False, True, False, False, False, True, True, True, False, False, False, True],
    [14, True, False, True, True, True, False, False, False, False, False, False, True, True, False, False],
    [15, False, True, False, False, False, True, False, True, False, False, True, True, False, False, False],
    [16, True, True, True, False, False, False, False, False, True, True, False, False, True, False, False],
    [17, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True],
    [18, False, False, True, False, False, False, True, False, False, False, False, False, False, True, False]]

groupList = []
Dict = {}
problemStudents = []

def sortAlgo(answerList):
    length = len(answerList)
    student = 0
    tempGroup = []
    tempStuID = []
    tempGroup.append(answerList[0])
    'tempStuID.append(answerList[0][0])'
    stuPos = 0
    diffSkills = []
    simProjects = []
    simAvail = []
    iterCount = 1

    while student <= length:
        student += 1
        stuPos += 1
        element = 1
        validationList = [0, 0, 0]
        valCheck = True
        uniqueSkill = False
        sameProject = False
        sameAvail = False
        simProjectsTemp = []
        simAvailTemp = []
        updateGroup = False

        '''print(element)
        print(student)'''

        if (student + 1) == length:
            problemStudents.append(answerList[0])
            answerList.pop(0)
            break

        print(answerList[0][0])
        print(answerList[student][0])
        print(length)
        print(student)

        if answerList[0][element] is True and answerList[student][element] is True:
            validationList[0] += 1
            simAvailTemp.append(1)
        else:
            'different availability'
        if answerList[0][element+1] is True and answerList[student][element+1] is True:
            validationList[0] += 1
            simAvailTemp.append(2)
        else:
            'different availability'
        if answerList[0][element+2] is True and answerList[student][element+2] is True:
            validationList[0] += 1
            simAvailTemp.append(3)
        else:
            'different availability'
        element += 3

        'print(simAvailTemp)'

        if answerList[0][element] is True and answerList[student][element] is True:
            validationList[1] += 1
            simProjectsTemp.append(1)
        else:
            'different project'
        if answerList[0][element+1] is True and answerList[student][element+1] is True:
            validationList[1] += 1
            simProjectsTemp.append(2)
        else:
            'different project'
        if answerList[0][element+2] is True and answerList[student][element+2] is True:
            validationList[1] += 1
            simProjectsTemp.append(3)
        else:
            'different project'
        if answerList[0][element+3] is True and answerList[student][element+3] is True:
            validationList[1] += 1
            simProjectsTemp.append(4)
        else:
            'different project'
        if answerList[0][element+4] is True and answerList[student][element+4] is True:
            validationList[1] += 1
            simProjectsTemp.append(5)
        else:
            'different project'
        if answerList[0][element+5] is True and answerList[student][element+5] is True:
            validationList[1] += 1
            simProjectsTemp.append(6)
        else:
            'different project'
        element += 6

        if answerList[0][element] is True and answerList[student][element] is True:
            'Students have same skill'
        else:
            validationList[2] += 1
        if answerList[0][element+1] is True and answerList[student][element+1] is True:
            'Students have same skill'
        else:
            validationList[2] += 1
        if answerList[0][element+2] is True and answerList[student][element+2] is True:
            'Students have same skill'
        else:
            validationList[2] += 1
        if answerList[0][element+3] is True and answerList[student][element+3] is True:
            'Students have same skill'
        else:
            validationList[2] += 1
        if answerList[0][element+4] is True and answerList[student][element+4] is True:
            'Students have same skill'
        else:
            validationList[2] += 1
        if answerList[0][element+5] is True and answerList[student][element+5] is True:
            'Students have same skill'
        else:
            validationList[2] += 1

        print(validationList)

        for i in validationList:
            if i == 0:
                valCheck = False

        if valCheck == True:
            tempGroup.append(answerList[student])
            tempStuID.append(stuPos)
            print('Put into Temp Group')
            for i in simAvailTemp:
                simAvail.append(i)
            for i in simProjectsTemp:
                simProjects.append(i)
            updateGroup = True

        print(simAvail)

        if len(tempGroup) == 3:
            if tempGroup[1][10] == tempGroup[2][10]:
                'Students have same skill'
            else:
                validationList[2] += 1
                diffSkills.append(1)
            if tempGroup[1][11] == tempGroup[2][11]:
                'Students have same skill'
            else:
                validationList[2] += 1
                diffSkills.append(2)
            if tempGroup[1][12] == tempGroup[2][12]:
                'Students have same skill'
            else:
                validationList[2] += 1
                diffSkills.append(3)
            if tempGroup[1][13] == tempGroup[2][13]:
                'Students have same skill'
            else:
                validationList[2] += 1
                diffSkills.append(4)
            if tempGroup[1][14] == tempGroup[2][14]:
                'Students have same skill'
            else:
                validationList[2] += 1
                diffSkills.append(5)
            if tempGroup[1][15] == tempGroup[2][15]:
                'Students have same skill'
            else:
                validationList[2] += 1
                diffSkills.append(6)

            for i in set(simAvail):
                print('Count of simAvail', simAvail.count(i))
                if simAvail.count(i) == 2:
                    sameAvail = True

            for i in set(simProjects):
                if simProjects.count(i) == 2:
                    sameProject = True

            '''print(diffSkills)
            print(set(diffSkills))'''

            for i in set(diffSkills):
                print('Count of diffSkills', diffSkills.count(i))
                if diffSkills.count(i) < 2:
                    uniqueSkill = True

            print(simAvail)
            'print(simProjects)'

            print(uniqueSkill)
            print(sameProject)
            print(sameAvail)

            if uniqueSkill is True and sameProject is True and sameAvail is True:
                groupList.append(tempGroup)
                answerList.pop(0)
                tempStuID[0] = tempStuID[0] - 1
                answerList.pop(tempStuID[0])
                tempStuID[1] = tempStuID[1]-2
                answerList.pop(tempStuID[1])
                break
            else:
                tempGroup.pop()
                tempStuID.pop()
                for i in simAvailTemp:
                    simAvail.pop()
                for i in simProjectsTemp:
                    simProjects.pop()
                continue
        else:
            if iterCount >= 2 and len(tempGroup) > 2 and updateGroup is True:
                print('Length of simAvailTemp', len(simAvailTemp))
                print('Length of simAvail', len(simAvail))
                for i in simAvailTemp:
                    simAvail.pop()
                if len(tempGroup) > 2:
                    for i in simProjectsTemp:
                        simProjects.pop()
        iterCount += 1
        print(simAvail)
        print('Length of temp group', len(tempGroup))

    for i in answerList:
        print(i)
    print('')
    for i in groupList:
        for x in i:
            print(x)
        print('')
    print('')


    stuAdded = False

    if len(answerList) > 3:
        sortAlgo(answerList)
    else:
        for stu in answerList:
            stuAdded = False
            groupCount = 0
            stuCount = 0
            elementCount = 1
            while groupCount < len(groupList) and stuAdded == False:
                if len(groupList[groupCount]) > 3:
                    'skip'
                    groupCount += 1
                else:
                    if stuAdded == False:
                        while stuCount <= 3:
                            if stuAdded == False:
                                while elementCount <= 3:
                                    print(stu[elementCount])
                                    print(groupList[groupCount][stuCount][elementCount])
                                    if stu[elementCount] is True and groupList[groupCount][stuCount][elementCount] is True:
                                        groupList[groupCount].append(stu)
                                        stuAdded = True
                                        break
                                    else:
                                        elementCount += 1
                                stuCount += 1
                                elementCount = 1
                            else:
                                break
                    else:
                        break
                    groupCount += 1

        for stu in problemStudents:
            stuAdded = False
            groupCount = 0
            stuCount = 0
            elementCount = 1
            while groupCount < len(groupList) and stuAdded == False:
                if len(groupList[groupCount]) > 3:
                    'skip'
                    groupCount += 1
                else:
                    if stuAdded == False:
                        while stuCount <= 3:
                            if stuAdded == False:
                                while elementCount <= 3:
                                    if stu[elementCount] is True and groupList[groupCount][stuCount][elementCount] is True:
                                        groupList[groupCount].append(stu)
                                        stuAdded = True
                                        break
                                    else:
                                        elementCount += 1
                                stuCount += 1
                                elementCount = 1
                            else:
                                break
                    else:
                        break
                    groupCount += 1



sortAlgo(answerList)

for i in groupList:
    for x in i:
        print(x)
    print('')
print('problemStudents')
for i in problemStudents:
    print(i)
    print('')
print('')
'This is the part where we put the groupList into the database'

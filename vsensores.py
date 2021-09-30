sensor=open('valorsensor.txt','r')
valorsensores=sensor.readlines()
for valor in valorsensores:
    print('sensor 1:'+valor[0:9]+';sensor 2:'+valor[1:9].replace('/n',''))
%Configs for the circles
theta=0:0.1:360;
r=5;
x=r*cosd(theta);
y=r*sind(theta);
xlim([-40,40]);
ylim([-40,20]);
%Variable to exit the loop 
esc=1;

rectangle('position',[-7 ,-27,14 ,34],'FaceColor',[0,0,0]);

hold on;
rectangle('position',[-1 ,-40,2 ,13],'FaceColor',[0,0,0]);
 

%Lower rectangle
ButtonHandle = uicontrol('Style', 'PushButton', ...
                         'String', 'Stop loop', ...
                         'Callback', 'delete(gcbf)');
plot(x,y);
fill(x,y,[0.5,0,0]);
xlim([-40,40]);
ylim([-40,40]);
hold on;
plot(x,y-10);
fill(x,y-10,[0.5,0.5,0]);
hold on;
plot(x,y-20);
fill(x,y-20,[0,0.5,0]);
hold on;

for k = 1:1e6
  
 
   
    fill(x,y-20,[0,0.5,0]);
    fill(x,y,'r');
    pause(1)
    fill(x,y,[0.5,0,0]);
    fill(x,y-10,'y');
    pause(1)
    fill(x,y-10,[0.5,0.5,0]);
    fill(x,y-20,'g');
    hold on;
    pause(1)
  if ~ishandle(ButtonHandle)
    break;
  end
end
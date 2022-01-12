r=9;
x=-50:0.1:50;
y1=sqrt(r.^2-x.^2);
y2=-y1;
deg=0:1:360;
plot(x,y1);
hold on;
%plot(x,y2);
%subplot(2,2,2);

axis([-10 10 -10 10]);
%xlim([0,360]);
theta=0:1:360;
x=r*cosd(theta);
y=r*sind(theta);
c=plot(x,y);
fill(x,y,'r');
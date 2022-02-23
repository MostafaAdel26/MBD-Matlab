function varargout = calculator(varargin)
% CALCULATOR MATLAB code for calculator.fig
%      CALCULATOR, by itself, creates a new CALCULATOR or raises the existing
%      singleton*.
%
%      H = CALCULATOR returns the handle to a new CALCULATOR or the handle to
%      the existing singleton*.
%      CALCULATOR('CALLBACK',hObject,eventData,handles,...) calls the local
%      function named CALLBACK in CALCULATOR.M with the given input arguments.
%
%      CALCULATOR('Property','Value',...) creates a new CALCULATOR or raises the
%      existing singleton*.  Starting from the left, property value pairs are
%      applied to the GUI before calculator_OpeningFcn gets called.  An
%      unrecognized property name or invalid value makes property application
%      stop.  All inputs are passed to calculator_OpeningFcn via varargin.
%
%      *See GUI Options on GUIDE's Tools menu.  Choose "GUI allows only one
%      instance to run (singleton)".
%
% See also: GUIDE, GUIDATA, GUIHANDLES

% Edit the above text to modify the response to help calculator

% Last Modified by GUIDE v2.5 03-Jan-2022 10:53:44

% Begin initialization code - DO NOT EDIT
gui_Singleton = 1;
gui_State = struct('gui_Name',       mfilename, ...
                   'gui_Singleton',  gui_Singleton, ...
                   'gui_OpeningFcn', @calculator_OpeningFcn, ...
                   'gui_OutputFcn',  @calculator_OutputFcn, ...
                   'gui_LayoutFcn',  [] , ...
                   'gui_Callback',   []);
if nargin && ischar(varargin{1})
    gui_State.gui_Callback = str2func(varargin{1});
end

if nargout
    [varargout{1:nargout}] = gui_mainfcn(gui_State, varargin{:});
else
    gui_mainfcn(gui_State, varargin{:});
end
% End initialization code - DO NOT EDIT


% --- Executes just before calculator is made visible.
function calculator_OpeningFcn(hObject, eventdata, handles, varargin)

%set(handles.left_op_list,'String',str)

% This function has no output args, see OutputFcn.
% hObject    handle to figure
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
% varargin   command line arguments to calculator (see VARARGIN)

% Choose default command line output for calculator
handles.output = hObject;

% Update handles structure
guidata(hObject, handles);
global left_a;
global right_a;
global num1;
global num2;
global vector1;
global vector2;

% UIWAIT makes calculator wait for user response (see UIRESUME)
% uiwait(handles.figure1);


% --- Outputs from this function are returned to the command line.
function varargout = calculator_OutputFcn(hObject, eventdata, handles) 
% varargout  cell array for returning output args (see VARARGOUT);
% hObject    handle to figure
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Get default command line output from handles structure
varargout{1} = handles.output;


% --- Executes on selection change in left_op_list.
function left_op_list_Callback(hObject, eventdata, handles)
% hObject    handle to left_op_list (see GCBO)
global left_a;
left_a=get(handles.left_op_list,'Value')

switch left_a
    case 1
        set(handles.left_operator,'String','+');
     case 2
        set(handles.left_operator,'String','-')
    case 3
        set(handles.left_operator,'String','*')
    case 4
        set(handles.left_operator,'String','/')
        
end
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: contents = cellstr(get(hObject,'String')) returns left_op_list contents as cell array
%        contents{get(hObject,'Value')} returns selected item from left_op_list


% --- Executes during object creation, after setting all properties.
function left_op_list_CreateFcn(hObject, eventdata, handles)
% hObject    handle to left_op_list (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: listbox controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end


% --- Executes on button press in left_equal.
function left_equal_Callback(hObject, eventdata, handles)
global left_a;
global num1;
global num2;
left_a=get(handles.left_op_list,'Value')
num1=str2double(get(handles.num1,'String'));
num2=str2double(get(handles.num2,'String'));

set(handles.left_error_result,'String','');
set(handles.left_result,'String','');

if isnan(num1) 
            set(handles.left_error_result,'String','Enter a Number in the 1st field -_-')
            return
end

if isnan(num2) 
            set(handles.left_error_result,'String','Enter a Number in the 2nd field -_-')
            return
end

switch left_a
    case 1
        set(handles.left_result,'String',num1+num2);
     case 2
        set(handles.left_result,'String',num1-num2);
    case 3
        set(handles.left_result,'String',num1*num2);
    case 4
        if num2=='0'
            set(handles.left_error_result,'String','Division by zero -_-')
            return
        end 
        set(handles.left_result,'String',num1/num2);
end

% hObject    handle to left_equal (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)



function num1_Callback(hObject, eventdata, handles)
% hObject    handle to num1 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: get(hObject,'String') returns contents of num1 as text
%        str2double(get(hObject,'String')) returns contents of num1 as a double


% --- Executes during object creation, after setting all properties.
function num1_CreateFcn(hObject, eventdata, handles)
% hObject    handle to num1 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: edit controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end



function num2_Callback(hObject, eventdata, handles)
% hObject    handle to num2 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: get(hObject,'String') returns contents of num2 as text
%        str2double(get(hObject,'String')) returns contents of num2 as a double


% --- Executes during object creation, after setting all properties.
function num2_CreateFcn(hObject, eventdata, handles)
% hObject    handle to num2 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: edit controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end



function equation_input_Callback(hObject, eventdata, handles)
% hObject    handle to equation_input (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: get(hObject,'String') returns contents of equation_input as text
%        str2double(get(hObject,'String')) returns contents of equation_input as a double


% --- Executes during object creation, after setting all properties.
function equation_input_CreateFcn(hObject, eventdata, handles)
% hObject    handle to equation_input (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: edit controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end



function x_axis_input_Callback(hObject, eventdata, handles)
% hObject    handle to x_axis_input (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: get(hObject,'String') returns contents of x_axis_input as text
%        str2double(get(hObject,'String')) returns contents of x_axis_input as a double


% --- Executes during object creation, after setting all properties.
function x_axis_input_CreateFcn(hObject, eventdata, handles)
% hObject    handle to x_axis_input (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: edit controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end


% --- Executes on selection change in right_op_list.
function right_op_list_Callback(hObject, eventdata, handles)
% hObject    handle to right_op_list (see GCBO)
global right_a;
right_a=get(handles.right_op_list,'Value')

switch right_a
    case 1
        set(handles.right_operator,'String','+')
     case 2
        set(handles.right_operator,'String','-')
    case 3
        set(handles.right_operator,'String','*')
    case 4
        set(handles.right_operator,'String','/')
end

% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: contents = cellstr(get(hObject,'String')) returns right_op_list contents as cell array
%        contents{get(hObject,'Value')} returns selected item from right_op_list


% --- Executes during object creation, after setting all properties.
function right_op_list_CreateFcn(hObject, eventdata, handles)
% hObject    handle to right_op_list (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: listbox controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end



function y_axis_input_Callback(hObject, eventdata, handles)
% hObject    handle to y_axis_input (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: get(hObject,'String') returns contents of y_axis_input as text
%        str2double(get(hObject,'String')) returns contents of y_axis_input as a double


% --- Executes during object creation, after setting all properties.
function y_axis_input_CreateFcn(hObject, eventdata, handles)
% hObject    handle to y_axis_input (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: edit controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end


% --- Executes on button press in right_equal.
function right_equal_Callback(hObject, eventdata, handles)

global vector1;
global vector2;
global right_a;

vector1=str2num(get(handles.x_axis_input,'String'));
vector2=str2num(get(handles.y_axis_input,'String'));

set(handles.right_error_result,'String','');
set(handles.right_result,'String','');


if ~isvector(vector1)
    set(handles.right_error_result,'String','Enter vector in 1st field -_-')
    return
end

if ~isvector(vector2)
    set(handles.right_error_result,'String','Enter vector in 2nd field -_-')
    return
end

if length(vector1)~=length(vector2)
    set(handles.right_error_result,'String','vectors must be the same length -_-')
    return
end

switch right_a
    case 1
        set(handles.right_result,'String',mat2str(plus(vector1,vector2)));
     case 2
        set(handles.right_result,'String',mat2str(minus(vector1,vector2)));
    case 3
        set(handles.right_result,'String',mat2str(vector1.*vector2));
    case 4
        if any(vector2==0)
            set(handles.right_error_result,'String','Division by zero -_-')
            return
        end 
        set(handles.right_result,'String',mat2str(vector1./vector2));
end

% hObject    handle to right_equal (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)


% --- Executes on button press in enter.
function enter_Callback(hObject, eventdata, handles)

global vector1;
global vector2;

vector1=str2num(get(handles.x_axis_input,'String'));
vector2=str2num(get(handles.y_axis_input,'String'));

axesHandle = findobj('Tag', 'plot_output');


h=get(handles.plotting_options,'SelectedObject');

switch get(h,'Tag')
    case 'x_axis'
        vector2=[];
        vector2=1:1:length(vector1)
        plot(handles.plot_output,vector1,vector2)
        
    case 'y_axis'
        plot(handles.plot_output,vector2)
    case 'xy_axis'
        if length(vector1)~=length(vector1)
            set(handles.right_error_result,'String','vectors must be the same length -_-')
            return
        end
        plot(handles.plot_output,vector1,vector2)
    case 'resultant'
        plot(handles.plot_output,str2num(get(handles.right_result,'String')))
        display(class(str2num(get(handles.right_result,'String'))))
    case 'sine'
         plot(handles.plot_output,sind(0:1:360));
    case 'cosine'
         plot(handles.plot_output,cosd(0:1:360));
    case 'equation'
        x=-10:0.1:10;
        y=-10:0.1:10;
         
        plot(handles.plot_output,eval(get(handles.equation_input,'String')));
       % xlim(handles.plot_output,[-20,20])
       % ylim(handles.plot_output,[-20,20])
        
    otherwise
        plot(handles.plot_output,0,0);
end

% hObject    handle to enter (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)


% --- Executes on button press in delete.
function delete_Callback(hObject, eventdata, handles)

plot(handles.plot_output,0,0);

% hObject    handle to delete (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)


% --- Executes during object creation, after setting all properties.
function left_operator_CreateFcn(hObject, eventdata, handles)

        
% hObject    handle to left_operator (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

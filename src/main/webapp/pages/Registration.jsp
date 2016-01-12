<%--
  Created by IntelliJ IDEA.
  User: Kyza
  Date: 11.01.2016
  Time: 23:50
  To change this template use File | Settings | File Templates.
--%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Registration</title>
</head>
<body>
<div align="center">
    <form:form action="register" method="post" commandName="userForm">
        <table border="0">
            <tr>
                <td colspan="2" align="center"><h2>Spring MVC Form Demo - Registration</h2></td>
            </tr>
            <tr>
                <td>User Name:</td>
                <td><form:input path="username"/></td>
            </tr>
            <tr>
                <td>Password:</td>
                <td><form:password path="password"/></td>
            </tr>
            <tr>
                <td colspan="2" align="center"><input type="submit" value="Register"/></td>
            </tr>
        </table>
    </form:form>
</div>
</body>
</html>


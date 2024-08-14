<?php
require_once('book-config.inc.php');

function setConnectionInfo($values=array()) {
  $pdo	=	new	PDO(DBCONNECTION, DBUSER, DBPASS);
  $pdo->setAttribute(PDO::ATTR_ERRMODE,	PDO::ERRMODE_EXCEPTION);
  return $pdo;
}


function runQuery($pdo, $sql, $parameters)     {
  try	{
    $statement	=	$pdo->prepare($sql);
		$statement->bindValue($parameters[0],	$parameters[1]);
		$statement->execute();
    $pdo	=	null;
    return $statement;
  }
  catch	(PDOException	$e)	{
      die(	$e->getMessage()	);
  }
}


function readAllEmployees() {
  try	{
    $pdo = setConnectionInfo();
    $sql	=	"select	*	from	employees	order	by	LastName";
    $result	=	$pdo->query($sql);
    $pdo	=	null;
    return $result;
  }
  catch	(PDOException	$e)	{
      die(	$e->getMessage()	);
  }
}

function readSelectEmployeeByID($EmployeeID){
  try	{
    $pdo = setConnectionInfo();
    $sql	=	"select	*	from	employees	where EmployeeID =:id";
    $params = array(":id", $EmployeeID);
    $result	=	runQuery($pdo, $sql, $params);
    $pdo	=	null;
    return $result;
  }
  catch	(PDOException	$e)	{
      die(	$e->getMessage()	);
  }
}

function readSelectEmployeesByName($EmployeeName) {
  try	{
    $pdo = setConnectionInfo();
    $sql	=	"select	*	from	employees	where LastName =:name";
    $params = array(":name", $EmployeeName);
    $result	=	runQuery($pdo, $sql, $params);
    $pdo	=	null;
    return $result;
  }
  catch	(PDOException	$e)	{
      die(	$e->getMessage()	);
  }
}

function readTODOs($EmployeeID) {
  try	{
    $pdo = setConnectionInfo();
    $sql	=	"select	*	from	employeetodo	where EmployeeID =:id";
    $params = array(":id", $EmployeeID);
    $result	=	runQuery($pdo, $sql, $params);
    $pdo	=	null;
    return $result;
  }
  catch	(PDOException	$e)	{
      die(	$e->getMessage()	);
  }
}

?>

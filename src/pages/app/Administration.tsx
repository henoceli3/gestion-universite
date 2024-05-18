import { Button, Col, Popconfirm, Row, Space, Table } from "antd";
import PageLabel from "../../component/common/PageLabel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import TableContainer from "../../component/common/TableContainer";
import { useEffect, useState } from "react";
import { AdminMembersInterface } from "../../config/Interfaces";
import axios from "axios";
import { Endpoints } from "../../config/Endoinpt";
import NotificationError from "../../component/common/NotificationError";
import { ColumnsType } from "antd/es/table";
import NotificationSucces from "../../component/common/NotificationSucces";

const Administration = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [administrations, setAdministrations] = useState<
    AdminMembersInterface[]
  >([] as AdminMembersInterface[]);
  async function getAllAdministrationsMembers() {
    try {
      setLoading(true);
      const res = await axios.get(
        `${Endpoints.baseUrl}${Endpoints.admin.getAll}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setAdministrations(res.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      NotificationError("Une erreur est survenue");
      console.log(error);
    }
  }

  useEffect(() => {
    getAllAdministrationsMembers();
  }, []);

  async function deleteAdmin(id: number) {
    try {
      setLoading(true);
      const res = await axios.delete(
        `${Endpoints.baseUrl}${Endpoints.admin.delete}/${id}`
      );
      if (res.status === 200) {
        NotificationSucces("Suppression reussi");
        getAllAdministrationsMembers();
      } else {
        NotificationError(res.data.message);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      NotificationError("Une erreur est survenue");
      console.log(error);
    }
  }

  const columns: ColumnsType<AdminMembersInterface> = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
      render: (
        _value: string,
        _record: AdminMembersInterface,
        index: number
      ) => <>{index + 1}</>,
    },
    {
      title: "Nom",
      dataIndex: "nom",
      key: "nom",
      render: (value: string) => <>{value}</>,
    },
    {
      title: "Prenoms",
      dataIndex: "prenoms",
      key: "prenoms",
      render: (value: string) => <>{value}</>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (value: string) => <>{value}</>,
    },
    {
      title: "Numero",
      dataIndex: "numero",
      key: "numero",
      render: (value: string) => <>{value}</>,
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (value: string) => <>{value}</>,
    },
    {
      title: "Actions",
      render: (record: AdminMembersInterface) => (
        <>
          <Space>
            <Button
              icon={<FontAwesomeIcon icon={faEdit} />}
              onClick={() => {
                navigate(
                  `/administration/modifier-administration/?id=${record.id}`
                );
              }}
            />
            <Popconfirm
              title={"Voulez vous vraiment suprimer le user"}
              onConfirm={() => {
                deleteAdmin(record.id);
              }}
            >
              <Button
                icon={<FontAwesomeIcon icon={faTrash} />}
                onClick={() => {}}
              />
            </Popconfirm>
          </Space>
        </>
      ),
    },
  ];
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Space style={{ display: "flex", justifyContent: "space-between" }}>
            <PageLabel label="Administration" />
            <Button
              type="primary"
              icon={<FontAwesomeIcon icon={faPlus} />}
              onClick={() => navigate("/administration/ajouter-administration")}
            >
              Ajouter
            </Button>
          </Space>
        </Col>
        <Col span={24}>
          <TableContainer
            children={
              <>
                <Table
                  columns={columns}
                  loading={loading}
                  dataSource={administrations}
                />
              </>
            }
          />
        </Col>
      </Row>
    </>
  );
};

export default Administration;
